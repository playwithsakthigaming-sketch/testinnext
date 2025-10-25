
'use server';

import eventsData from '@/lib/events.json';
import { parseEventDate } from '@/lib/date-utils';

const VTC_ID = '73933';

type TruckersMPVtcResponse = {
    error: boolean;
    response?: {
        members_count: number;
    }
}

async function fetchTruckersMPVtcData(): Promise<number> {
    try {
        const url = `https://api.truckersmp.com/v2/vtc/${VTC_ID}`;
        const res = await fetch(url, {
            next: { revalidate: 3600 } // Revalidate every hour
        });
        
        if (!res.ok) {
            console.error(`Failed to fetch from TruckersMP VTC endpoint:`, res.status, await res.text());
            return 0;
        }

        const data: TruckersMPVtcResponse = await res.json();
        
        if (data && !data.error && data.response) {
            return data.response.members_count;
        } else {
            console.error(`Invalid API response structure from TruckersMP:`, data);
            return 0;
        }
    } catch (error) {
        console.error(`Error fetching from TruckersMP:`, error);
        return 0;
    }
}

function getCompletedEventsCount(): number {
    const now = new Date();
    // We only count internal events as "completed" by the VTC
    return eventsData.events.filter(event => {
        if (event.type !== 'internal') return false;
        const eventDate = parseEventDate(event.meetupTime || event.date);
        return eventDate ? eventDate < now : false;
    }).length;
}

export async function getAchievementsData() {
    const totalDrivers = await fetchTruckersMPVtcData();
    const completedEvents = getCompletedEventsCount();
    return { totalDrivers, completedEvents };
}
