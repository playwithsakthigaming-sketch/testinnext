
'use server';

import type { Job } from '@/lib/truckershub-types';
import type { Application } from '@/lib/applications';
import fs from 'fs/promises';
import path from 'path';
import { unstable_cache as cache } from 'next/cache';


const applicationsFilePath = path.join(process.cwd(), 'src', 'lib', 'applications.json');
const VTC_ID = '1600';


const readJsonFile = cache(async <T>(filePath: string): Promise<T> => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
           return { applications: [] } as any;
        }
        throw error;
    }
}, ['json-files-data'], { revalidate: 10 });


type UserApiResponse = {
    username: string;
    steamID: string;
    avatar: string;
    country: string;
    role: {
        name: string;
    };
    truckersmp_id: number;
    id: number;
    registered: string;
};

type JobsApiResponse = {
    status: boolean;
    response: Job[] | {};
};

type GameStats = {
    total_km: number;
    total_jobs: number;
    longest_job: number;
};

type StatsApiResponse = {
    level: number;
    xp: { total: number };
    income: { total: number };
    total_jobs: number;
    total_distance: number;
    fuel_burned: { total: number };
    weight: { total: number };
    ets: GameStats;
    ats: GameStats;
};

export type UserProfile = Application & {
    license_number: string;
    division: string | null;
    timezone: string;
    jobs: Job[];
    stats: StatsApiResponse | null;
    avatar: string;
    total_km: number;
    total_jobs: number;
    longest_job: number;
    registered: string;
    role: string;
    monthly_xp: number;
    monthly_income: number;
    monthly_weight: number;
    monthly_fuel: number;
    truckersmpId: number | null;
};

async function fetchFromTruckersHub<T>(endpoint: string, params?: URLSearchParams): Promise<any | null> {
    const apiKey = process.env.TRUCKERSHUB_API_KEY;
    if (!apiKey) {
        console.error("TRUCKERSHUB_API_KEY is not set.");
        return null;
    }

    try {
        const url = new URL(`https://api.truckershub.in/v1/${endpoint}`);
        if (params) {
            params.forEach((value, key) => {
                url.searchParams.append(key, value);
            });
        }
        
        const res = await fetch(url.toString(), {
             headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
                'User-Agent': 'TamilPasangaVTC/1.0',
            },
            next: { revalidate: 300 } // Revalidate every 5 minutes
        });


        if (!res.ok) {
            console.error(`Failed to fetch from TruckersHub (${endpoint}):`, res.status, await res.text());
            return null;
        }

        const data: any = await res.json();
        
        if (data) {
             if (endpoint.startsWith('vtc/')) {
                if (data.vtc) {
                    if (endpoint.endsWith('/jobs')) return data.vtc.jobs;
                    if (endpoint.endsWith('/drivers')) return data.vtc.drivers;
                    if (endpoint.endsWith('/deliveries/live')) return data.vtc.deliveries;
                    if (endpoint.endsWith('/drivers/live')) return data.vtc.drivers_live;
                    return data.vtc;
                }
             }
            if (data.response) return data.response;
            if (data.jobs) return data.jobs;
            if (Array.isArray(data.drivers)) return data.drivers;
            if (data.skills) return { skills: data.skills };
            if (data.routes) return data.routes;
            if(data.statistics) return data.statistics;
            if (Array.isArray(data)) return data;
            if (data.status === false) {
                 if (Object.keys(data).length > 2 || (endpoint !== 'live/delivery' && !endpoint.includes('vtc'))) { 
                    console.warn(`TruckersHub API returned status false for ${endpoint}:`, JSON.stringify(data));
                 }
                 return null;
            }
            return data;
        }
        
        return null;

    } catch (error) {
        console.error(`Error fetching from TruckersHub (${endpoint}):`, error);
        return null;
    }
}


async function getTMPVTCDetails(truckersmpId: number | null) {
    if (!truckersmpId) return null;
    try {
        const res = await fetch(`${process.env.APP_URL}/api/truckersmp?endpoint=player/${truckersmpId}`);
        if (!res.ok) return null;
        const data = await res.json();
        return data.response?.vtc;
    } catch (error) {
        console.error("Failed to fetch from TruckersMP:", error);
        return null;
    }
}


export async function getProfileData(email: string): Promise<UserProfile | null> {
    const applicationsData = await readJsonFile<{ applications: Application[] }>(applicationsFilePath);
    const userApplication = applicationsData.applications.find(app => app.email === email && app.status === 'Accepted');

    if (userApplication) {
        const [jobsData, statsData, driverData] = await Promise.all([
            fetchFromTruckersHub<JobsApiResponse['response']>(`drivers/${userApplication.steamId}/jobs`),
            fetchFromTruckersHub<StatsApiResponse>(`statistics/${userApplication.steamId}`),
            fetchFromTruckersHub<UserApiResponse>(`drivers/${userApplication.steamId}`),
        ]);
        
        const driver = driverData;
        const truckersmpId = driver?.truckersmp_id || null;

        const [tmpVtcData] = await Promise.all([
             getTMPVTCDetails(truckersmpId),
        ]);


        const jobs = (jobsData && Array.isArray(jobsData)) ? jobsData : [];
        const stats = statsData || null;

        const totalKm = stats?.total_distance ?? 0;
        const totalJobs = stats?.total_jobs ?? 0;

        return {
            ...userApplication,
            license_number: `TP${userApplication.id.substring(4, 10)}`,
            division: 'Alpha',
            timezone: 'Asia/Kolkata', // Placeholder
            jobs,
            stats,
            avatar: userApplication.avatar || driver?.avatar || "https://static.truckersmp.com/avatars/5635477.1754020942.png",
            total_km: totalKm,
            total_jobs: totalJobs,
            longest_job: 0, // This data is not in the new structure
            registered: driver?.registered || userApplication.submittedAt,
            role: tmpVtcData?.role || driver?.role?.name || 'Driver',
            monthly_xp: stats?.xp?.total ?? 0,
            monthly_income: stats?.income?.total ?? 0,
            monthly_weight: stats?.weight?.total ?? 0,
            monthly_fuel: stats?.fuel_burned?.total ?? 0,
            truckersmpId: truckersmpId,
        };
    } else {
        console.error(`No accepted application found for email:`, email);
        return null;
    }
}
