
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { EventsData, Event, SlotArea } from '@/lib/events';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { parseEventDate, formatDateTimeFromISO } from '@/lib/date-utils';
import { unstable_cache as cache } from 'next/cache';


const eventsFilePath = path.join(process.cwd(), 'src', 'lib', 'events.json');
const imagesFilePath = path.join(process.cwd(), 'src', 'lib', 'placeholder-images.json');
const VTC_ID = '73933';


const readJsonFile = cache(async <T>(filePath: string): Promise<T> => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            if (filePath.includes('events.json')) return { events: [] } as any;
            if (filePath.includes('placeholder-images.json')) return { placeholderImages: [] } as any;
        }
        throw error;
    }
}, ['json-files-data'], { revalidate: 10 });

async function writeJsonFile(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function getEvents(): Promise<Event[]> {
    const data = await readJsonFile<EventsData>(eventsFilePath);
    return data.events.sort((a, b) => {
        const dateA = parseEventDate(a.meetupTime || a.date);
        const dateB = parseEventDate(b.meetupTime || b.date);
        if (dateA && dateB) {
            return dateB.getTime() - dateA.getTime();
        }
        return 0;
    });
}


export async function deleteEvent(eventId: string) {
    try {
        const eventsData = await readJsonFile<EventsData>(eventsFilePath);
        const imagesData = await readJsonFile<{ placeholderImages: ImagePlaceholder[] }>(imagesFilePath);
        const mutableEventsData = JSON.parse(JSON.stringify(eventsData));
        const mutableImagesData = JSON.parse(JSON.stringify(imagesData));


        const eventToDelete = mutableEventsData.events.find((event: Event) => event.id === eventId);
        if (!eventToDelete) {
            return { success: false, message: 'Event not found.' };
        }

        // Filter out the event and its corresponding image
        mutableEventsData.events = mutableEventsData.events.filter((event: Event) => event.id !== eventId);
        if (eventToDelete.imageId) {
            mutableImagesData.placeholderImages = mutableImagesData.placeholderImages.filter((image: ImagePlaceholder) => image.id !== eventToDelete.imageId);
        }

        await writeJsonFile(eventsFilePath, mutableEventsData);
        await writeJsonFile(imagesFilePath, mutableImagesData);

        revalidatePath('/admin/events');
        revalidatePath('/events'); 

        return { success: true, message: 'Event deleted successfully.' };
    } catch (error) {
        console.error('Error deleting event:', error);
        return { success: false, message: 'Failed to delete event.' };
    }
}

type TMPEvent = {
    id: number;
    name: string;
    url: string;
    banner: string;
    map: {
        name: string;
        url: string;
    };
    departure: {
        location: string;
        city: string;
    };
    arrive: {
        location: string;
        city: string;
    };
    server: {
        name: string;
    };
    starts_at: string;
    meetup_at: string;
};


async function addSingleEvent(tmpEvent: TMPEvent, type: 'internal' | 'partner' = 'internal'): Promise<{success: boolean, message: string}> {
    const eventsData = await readJsonFile<EventsData>(eventsFilePath);
    const imagesData = await readJsonFile<{ placeholderImages: ImagePlaceholder[] }>(imagesFilePath);
    const mutableEventsData = JSON.parse(JSON.stringify(eventsData));
    const mutableImagesData = JSON.parse(JSON.stringify(imagesData));

    const eventExists = mutableEventsData.events.some((e: Event) => e.id === String(tmpEvent.id));
    
    if (eventExists) {
        return { success: false, message: `Event "${tmpEvent.name}" already exists.`};
    }
            
    const imageId = `event-${tmpEvent.id}`;

    const newImage: ImagePlaceholder = {
        id: imageId,
        description: `Image for ${tmpEvent.name}`,
        imageUrl: tmpEvent.banner,
        imageHint: "truck convoy",
    };
    mutableImagesData.placeholderImages.unshift(newImage);

    const newEvent: Event = {
        id: String(tmpEvent.id),
        imageId: imageId,
        title: tmpEvent.name,
        url: tmpEvent.url,
        type: type,
        description: "Event details automatically imported from TruckersMP.",
        rules: "Standard TruckersMP rules apply.",
        attendees: 0,
        vtcs: 0,
        date: formatDateTimeFromISO(tmpEvent.meetup_at),
        meetupTime: formatDateTimeFromISO(tmpEvent.meetup_at),
        departureTime: formatDateTimeFromISO(tmpEvent.starts_at),
        slots: [],
        departure: `${tmpEvent.departure.location} (${tmpEvent.departure.city})`,
        arrival: `${tmpEvent.arrive.location} (${tmpEvent.arrive.city})`,
        server: tmpEvent.server.name,
        routeMapUrl: tmpEvent.map.url,
    };
    mutableEventsData.events.unshift(newEvent);

    await writeJsonFile(eventsFilePath, mutableEventsData);
    await writeJsonFile(imagesFilePath, mutableImagesData);

    revalidatePath('/admin/events');
    revalidatePath('/events');
    
    return { success: true, message: `Event "${newEvent.title}" added successfully.`};
}

export async function addEventFromTruckersMPUrl(eventUrl: string) {
    const urlRegex = /truckersmp\.com\/events\/(\d+)/;
    const match = eventUrl.match(urlRegex);
    const eventId = match ? match[1] : null;

    if (!eventId) {
        return { success: false, message: 'Invalid TruckersMP Event URL provided.' };
    }

    try {
        const res = await fetch(`https://api.truckersmp.com/v2/events/${eventId}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch event from TruckersMP. Status: ${res.status}`);
        }

        const tmpData = await res.json();
        const tmpEvent = tmpData.response as TMPEvent;

        if (!tmpEvent) {
             return { success: false, message: "Could not find event data in TruckersMP response." };
        }

        return await addSingleEvent(tmpEvent);

    } catch (error) {
        console.error('Error adding event from TruckersMP URL:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        return { success: false, message: errorMessage };
    }
}


async function fetchAndProcessEvents(
    url: string,
    type: 'internal' | 'partner',
    existingEvents: Event[],
    imagesData: { placeholderImages: ImagePlaceholder[] }
): Promise<number> {
    const res = await fetch(url);
    if (!res.ok) {
        console.error(`Failed to fetch events from ${url}. Status: ${res.status}`);
        return 0;
    }

    const tmpData = await res.json();
    const tmpEvents: TMPEvent[] = (type === 'partner' ? tmpData.response : tmpData.response.events) || [];

    if (!tmpEvents || tmpEvents.length === 0) {
        return 0;
    }

    let addedCount = 0;
    for (const tmpEvent of tmpEvents) {
        const eventDate = new Date(tmpEvent.starts_at);
        if (isNaN(eventDate.getTime()) || eventDate < new Date()) {
            continue;
        }

        const eventExists = existingEvents.some(e => e.id === String(tmpEvent.id));
        if (!eventExists) {
            addedCount++;
            const imageId = `event-${tmpEvent.id}`;

            if (!imagesData.placeholderImages.some(img => img.id === imageId)) {
                imagesData.placeholderImages.unshift({
                    id: imageId,
                    description: `Image for ${tmpEvent.name}`,
                    imageUrl: tmpEvent.banner,
                    imageHint: "truck convoy",
                });
            }

            existingEvents.unshift({
                id: String(tmpEvent.id),
                imageId: imageId,
                title: tmpEvent.name,
                url: tmpEvent.url,
                type: type,
                description: "Event details automatically imported from TruckersMP.",
                rules: "Standard TruckersMP rules apply.",
                attendees: 0,
                vtcs: 0,
                date: formatDateTimeFromISO(tmpEvent.meetup_at),
                meetupTime: formatDateTimeFromISO(tmpEvent.meetup_at),
                departureTime: formatDateTimeFromISO(tmpEvent.starts_at),
                slots: [],
                departure: `${tmpEvent.departure.location} (${tmpEvent.departure.city})`,
                arrival: `${tmpEvent.arrive.location} (${tmpEvent.arrive.city})`,
                server: tmpEvent.server.name,
                routeMapUrl: tmpEvent.map.url,
            });
        }
    }
    return addedCount;
}

export async function syncEventsFromTruckersMP() {
  try {
    const eventsData = await readJsonFile<EventsData>(eventsFilePath);
    const imagesData = await readJsonFile<{ placeholderImages: ImagePlaceholder[] }>(imagesFilePath);
    const mutableEventsData = JSON.parse(JSON.stringify(eventsData));
    const mutableImagesData = JSON.parse(JSON.stringify(imagesData));
    
    let totalAdded = 0;
    
    totalAdded += await fetchAndProcessEvents(
        `https://api.truckersmp.com/v2/vtc/${VTC_ID}/events`,
        'internal',
        mutableEventsData.events,
        mutableImagesData
    );

    totalAdded += await fetchAndProcessEvents(
        `https://api.truckersmp.com/v2/vtc/${VTC_ID}/events/attending`,
        'partner',
        mutableEventsData.events,
        mutableImagesData
    );
    
    await writeJsonFile(eventsFilePath, mutableEventsData);
    await writeJsonFile(imagesFilePath, mutableImagesData);

    revalidatePath('/admin/events');
    revalidatePath('/events');

    if (totalAdded > 0) {
      return { success: true, message: `Successfully synced ${totalAdded} new event(s).`, added: totalAdded };
    }
    return { success: true, message: 'All events are already up-to-date.', added: 0 };

  } catch (error) {
    console.error('Error syncing events from TruckersMP:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: errorMessage, added: 0 };
  }
}

export async function sendEventReminder(eventId: string): Promise<{ success: boolean; message: string }> {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        return { success: false, message: 'Discord webhook URL is not configured.' };
    }

    try {
        const eventsData = await readJsonFile<EventsData>(eventsFilePath);
        const event = eventsData.events.find(e => e.id === eventId);

        if (!event) {
            return { success: false, message: 'Event not found.' };
        }

        const embed = {
            title: `📢 Event Reminder: ${event.title}`,
            description: `Get your engines ready! Our next event is starting soon.`,
            color: 3447003, // Blue
            fields: [
                { name: 'Meetup Time', value: event.meetupTime, inline: true },
                { name: 'Departure Time', value: event.departureTime, inline: true },
                { name: 'Server', value: event.server, inline: false },
                { name: 'Departure', value: event.departure, inline: true },
                { name: 'Arrival', value: event.arrival, inline: true },
            ],
            url: event.url,
            timestamp: new Date().toISOString(),
            footer: {
                text: 'Tamil Pasanga VTC | Event Reminder',
            },
        };

        const payload = {
            content: `@everyone Event starting soon!`,
            embeds: [embed],
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(`Discord webhook failed with status: ${response.status}`);
            return { success: false, message: 'Failed to send reminder to Discord.' };
        }
        
        return { success: true, message: 'Event reminder sent successfully!' };

    } catch (error) {
        console.error('Error sending event reminder:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
