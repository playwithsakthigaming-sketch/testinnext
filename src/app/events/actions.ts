
'use server';

import fs from 'fs/promises';
import path from 'path';
import type { EventsData, Event } from '@/lib/events';
import { unstable_cache as cache } from 'next/cache';
import { parseEventDate } from '@/lib/date-utils';

const eventsFilePath = path.join(process.cwd(), 'src', 'lib', 'events.json');

const readEvents = cache(async () => {
    try {
        const data = await fs.readFile(eventsFilePath, 'utf-8');
        const jsonData: EventsData = JSON.parse(data);
        // Sort events with the oldest first (ascending order)
        return jsonData.events.sort((a, b) => {
            const dateA = parseEventDate(a.date);
            const dateB = parseEventDate(b.date);

            if (dateA && dateB) {
                return dateA.getTime() - dateB.getTime();
            }
            if (dateA) return -1;
            if (dateB) return 1;
            return 0;
        });
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return [];
        }
        throw error;
    }
}, ['events-data'], { revalidate: 60 }); // Revalidate every 60 seconds

export async function getEvents(): Promise<Event[]> {
    return await readEvents();
}
