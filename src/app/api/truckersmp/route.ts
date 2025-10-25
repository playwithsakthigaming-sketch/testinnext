
'use server';

import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache as cache } from 'next/cache';

const getTruckersMPData = cache(
    async (endpoint: string) => {
        const truckersMPUrl = `https://api.truckersmp.com/v2/${endpoint}`;
        
        try {
            const apiResponse = await fetch(truckersMPUrl, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!apiResponse.ok) {
                const errorBody = await apiResponse.text();
                console.error(`TruckersMP API error: ${apiResponse.status} ${errorBody}`);
                return { error: `Error from TruckersMP API: ${apiResponse.statusText}`, status: apiResponse.status };
            }

            const data = await apiResponse.json();
            return { data };
        } catch (error) {
            console.error('Failed to fetch from TruckersMP API:', error);
            return { error: 'Failed to fetch from TruckersMP API', status: 500 };
        }
    },
    ['truckersmp-api'],
    { revalidate: 60 } // Revalidate every 60 seconds
);


export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams;
    const endpoint = searchParams.get('endpoint');

    if (!endpoint) {
        return new NextResponse('Missing endpoint parameter', { status: 400 });
    }

    const result = await getTruckersMPData(endpoint);

    if (result.error) {
        return new NextResponse(result.error, { status: result.status });
    }

    return NextResponse.json(result.data);
}
