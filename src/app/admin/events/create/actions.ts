
'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { EventsData, Event, SlotArea } from '@/lib/events';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

const bookingSchema = z.object({
  id: z.string(),
  slotNumber: z.coerce.number(),
  vtcName: z.string(),
  status: z.enum(['approved', 'pending', 'rejected', 'hold']),
});

const slotAreaSchema = z.object({
  id: z.string(),
  areaName: z.string().min(1, 'Area name is required'),
  imageUrl: z.string().url('Image URL must be a valid URL'),
  startSlot: z.coerce.number().min(1, 'Start slot must be at least 1'),
  endSlot: z.coerce.number().min(1, 'End slot must be at least 1'),
  bookings: z.array(bookingSchema),
}).refine(data => data.endSlot >= data.startSlot, {
    message: "End slot must be greater than or equal to start slot",
    path: ["endSlot"],
});

const timeSchema = z.object({
  hour: z.string().min(1, { message: 'HH' }),
  minute: z.string().min(1, { message: 'MM' }),
  timezone: z.string().min(1, { message: 'Zone' })
});

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  eventDate: z.date({ required_error: "An event date is required." }),
  imageUrl: z.string().url('Must be a valid URL'),
  url: z.string().url('Must be a valid URL'),
  routeMapUrl: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  type: z.enum(['internal', 'partner'], {
    errorMap: () => ({ message: 'Please select an event type' }),
  }),
  departure: z.string().optional(),
  arrival: z.string().optional(),
  server: z.string().optional(),
  meetupTime: timeSchema,
  departureTime: timeSchema,
  description: z.string().optional(),
  rules: z.string().optional(),
  slots: z.array(slotAreaSchema).optional(),
}).superRefine((data, ctx) => {
    if (data.type === 'internal') {
        if (!data.departure) ctx.addIssue({ code: 'custom', message: 'Departure is required', path: ['departure'] });
        if (!data.arrival) ctx.addIssue({ code: 'custom', message: 'Arrival is required', path: ['arrival'] });
        if (!data.server) ctx.addIssue({ code: 'custom', message: 'Server is required', path: ['server'] });
        if (!data.description) ctx.addIssue({ code: 'custom', message: 'Description is required', path: ['description'] });
        if (!data.rules) ctx.addIssue({ code: 'custom', message: 'Rules are required', path: ['rules'] });
    }
});


type FormValues = z.infer<typeof formSchema>;

const eventsFilePath = path.join(process.cwd(), 'src', 'lib', 'events.json');
const imagesFilePath = path.join(process.cwd(), 'src', 'lib', 'placeholder-images.json');


async function readJsonFile<T>(filePath: string): Promise<T> {
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
}

async function writeJsonFile(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Helper to format date and time
const formatDateTime = (date: Date, time: z.infer<typeof timeSchema>): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year} | ${time.hour}:${time.minute} ${time.timezone}`;
};

export async function createEvent(values: FormValues) {
  const validation = formSchema.safeParse(values);
  if (!validation.success) {
    console.error(validation.error.flatten().fieldErrors);
    return { success: false, message: 'Invalid data provided.' };
  }

  try {
    const eventsData = await readJsonFile<EventsData>(eventsFilePath);
    const imagesData = await readJsonFile<{ placeholderImages: ImagePlaceholder[] }>(imagesFilePath);

    const { eventDate, meetupTime, departureTime, imageUrl, ...restOfData } = validation.data;

    const imageId = `event-${Date.now()}`;
    const newImage: ImagePlaceholder = {
        id: imageId,
        description: `Image for ${validation.data.title}`,
        imageUrl: imageUrl,
        imageHint: 'custom event',
    };
    imagesData.placeholderImages.unshift(newImage);


    const newEvent: Event = {
      id: imageId,
      imageId: imageId,
      title: restOfData.title,
      url: restOfData.url,
      type: restOfData.type,
      description: restOfData.description || '',
      rules: restOfData.rules || '',
      attendees: 0,
      vtcs: 0,
      date: formatDateTime(eventDate, meetupTime),
      meetupTime: formatDateTime(eventDate, meetupTime),
      departureTime: formatDateTime(eventDate, departureTime),
      slots: restOfData.slots || [],
      departure: restOfData.departure || '',
      arrival: restOfData.arrival || '',
      server: restOfData.server || '',
      routeMapUrl: restOfData.routeMapUrl || '',
    };
    
    eventsData.events.unshift(newEvent);

    await writeJsonFile(eventsFilePath, eventsData);
    await writeJsonFile(imagesFilePath, imagesData);
    
    revalidatePath('/admin/events');
    revalidatePath('/events');
    
    return { success: true };
  } catch (error) {
    console.error('Error creating event:', error);
    return { success: false, message: 'Failed to write to data file.' };
  }
}
