
'use server';

import type { VtcStats, LeaderboardUser, Job, LiveDriver, Driver, Skill, DriverSkill, Route, LiveDelivery } from '@/lib/truckershub-types';

const VTC_ID = '1600';

type ApiResponse<T> = {
    status?: boolean;
    response?: T;
    drivers?: Driver[]; // for drivers endpoint
    jobs?: Job[]; // for jobs endpoint
    skills?: Skill[] | DriverSkill[]; // for skills endpoint
    routes?: Route[];
    vtc?: { jobs?: Job[], drivers?: Driver[], deliveries?: LiveDelivery[], drivers_live?: LiveDriver[] }; // for vtc/ endpoints
};

// This function should be executed on the server where process.env is available.
async function fetchFromTruckersHub<T>(endpoint: string, params?: URLSearchParams): Promise<T | null> {
    require('dotenv').config();
    console.log(process.env.TRUCKERSHUB_API_KEY);
    const apiKey = process.env.TRUCKERSHUB_API_KEY;
    if (!apiKey || apiKey === 'YOUR_API_KEY') {
        console.error("TRUCKERSHUB_API_KEY is not set or is still the default placeholder.");
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
                    if (endpoint.endsWith('/jobs')) return data.vtc.jobs as T;
                    if (endpoint.endsWith('/drivers')) return data.vtc.drivers as T;
                    if (endpoint.endsWith('/deliveries/live')) return data.vtc.deliveries as T;
                    if (endpoint.endsWith('/drivers/live')) return data.vtc.drivers_live as T;
                    return data.vtc as T;
                }
             }
            if (data.response) return data.response as T;
            if (data.jobs) return data.jobs as T;
            if (data.drivers) return data.drivers as T;
            if (data.skills) return { skills: data.skills } as T;
            if (data.routes) return data.routes as T;
            if (Array.isArray(data)) return data as T;
            if (data.status === false) {
                 if (Object.keys(data).length > 2 || (endpoint !== 'live/delivery' && !endpoint.includes('vtc'))) { 
                    console.warn(`TruckersHub API returned status false for ${endpoint}:`, JSON.stringify(data));
                 }
                 return null;
            }
            return data as T;
        }
        
        return null;

    } catch (error) {
        console.error(`Error fetching from TruckersHub (${endpoint}):`, error);
        return null;
    }
}


export async function getDashboardData() {
    try {
        const [statsData, allTime, monthly, jobs, liveDrivers] = await Promise.all([
            fetchFromTruckersHub<VtcStats>(`vtc/${VTC_ID}`),
            fetchFromTruckersHub<LeaderboardUser[]>('leaderboard/alltime'),
            fetchFromTruckersHub<LeaderboardUser[]>('leaderboard/monthly'),
            fetchFromTruckersHub<Job[]>(`vtc/${VTC_ID}/jobs`),
            fetchFromTruckersHub<LiveDriver[]>(`live/drivers`),
        ]);
        
        const recentJobs = jobs || [];
        
        return { stats: statsData, allTime, monthly, jobs: recentJobs, liveDrivers };
    } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        return { stats: null, allTime: null, monthly: null, jobs: null, liveDrivers: null };
    }
}

export async function getAllVtcJobs(month?: string, year?: string): Promise<Job[]> {
    const params = new URLSearchParams();
    if (month) params.append('month', month);
    if (year) params.append('year', year);
    const data = await fetchFromTruckersHub<Job[]>(`vtc/${VTC_ID}/jobs`, params);
    return data || [];
}

export async function getMyJobs(steamId: string): Promise<Job[]> {
    const data = await fetchFromTruckersHub<Job[]>(`drivers/${steamId}/jobs`);
    return data || [];
}

export async function getJobDetails(jobId: string): Promise<Job | null> {
    const data = await fetchFromTruckersHub<Job>(`jobs/${jobId}`);
    return data ?? null;
}

export async function getDrivers(): Promise<Driver[]> {
    const data = await fetchFromTruckersHub<Driver[]>(`vtc/${VTC_ID}/drivers`);
    return Array.isArray(data) ? data : [];
}

export async function getRoutes(): Promise<Route[]> {
    return await fetchFromTruckersHub<Route[]>(`vtc/${VTC_ID}/routes`) || [];
}

export async function getAvailableSkills(): Promise<Skill[]> {
    const response = await fetchFromTruckersHub<{ skills: Skill[] }>('skills');
    return response?.skills || [];
}

export async function getDriverSkills(steamId: string): Promise<DriverSkill[] | null> {
    const response = await fetchFromTruckersHub<{ skills: DriverSkill[] }>(`skills/${steamId}`);
    return response?.skills || null;
}

export async function updateDriverSkills(steamId: string, skills: { id: string, level: number }[]): Promise<{ success: boolean; message?: string }> {
    const payload = skills.reduce((acc, skill) => {
        acc[skill.id] = skill.level;
        return acc;
    }, {} as Record<string, number>);

    const response: any = await fetchFromTruckersHub(`skills/${steamId}`, new URLSearchParams({
        method: 'POST',
        body: JSON.stringify(payload),
    } as any));
    
    if (response && response.status) {
         return { success: true };
    }

    return { success: false, message: 'Failed to update skills. The API did not return a success status.' };
}

export async function getLiveDrivers(): Promise<LiveDriver[]> {
    const data = await fetchFromTruckersHub<LiveDriver[]>(`live/drivers`);
    return Array.isArray(data) ? data : [];
}

export async function getLiveDeliveries(): Promise<LiveDelivery[]> {
    const data = await fetchFromTruckersHub<LiveDelivery[]>(`live/deliveries`);
     return data || [];
}
