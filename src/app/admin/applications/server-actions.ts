
'use server';

import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';
import type { ApplicationStatus, ApplicationsData, Application } from '@/lib/applications';
import type { StaffData, StaffMember } from '@/lib/staff-members';
import type { EventsData, Event, Booking, BookingStatus, SlotArea } from '@/lib/events';
import { unstable_cache as cache } from 'next/cache';

const applicationsFilePath = path.join(process.cwd(), 'src', 'lib', 'applications.json');
const staffFilePath = path.join(process.cwd(), 'src', 'lib', 'staff-members.json');
const eventsFilePath = path.join(process.cwd(), 'src', 'lib', 'events.json');

const readJsonFile = cache(async <T>(filePath: string): Promise<T> => {
    try {
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            if (filePath.includes('applications.json')) {
                return { applications: [] } as T;
            }
            if (filePath.includes('staff-members.json')) {
                return { staffMembers: [] } as T;
            }
             if (filePath.includes('events.json')) {
                return { events: [] } as T;
            }
        }
        throw error;
    }
}, ['json-files-data'], { revalidate: 10 }); // Short revalidation for frequently updated files

async function writeJsonFile<T>(filePath: string, data: T): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function sendApplicationWebhookNotification(application: Application) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set.');
        return;
    }

    let title = '';
    let color = 0;
    let description = '';

    switch (application.status) {
        case 'Accepted':
            title = `Application Accepted: ${application.id}`;
            color = 5763719; // Green
            description = `Congratulations to **${application.name}**! Their application has been accepted.`;
            break;
        case 'Rejected':
            title = `Application Rejected: ${application.id}`;
            color = 15548997; // Red
            description = `Application for **${application.name}** has been rejected.`;
            break;
        default:
            return; // Don't send for 'Pending' or other statuses
    }

    const embed = {
        title: title,
        description: description,
        color: color,
        timestamp: new Date().toISOString(),
        fields: [
            { name: 'Applicant Name', value: application.name, inline: true },
        ],
        footer: {
            text: 'Tamil Pasanga VTC | Application Status Update',
        },
    };

    const payload = { embeds: [embed] };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(`Discord webhook failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error sending Discord webhook notification:', error);
    }
}


export async function getApplications(): Promise<Application[]> {
    const data = await readJsonFile<ApplicationsData>(applicationsFilePath);
    // Sort by submission date, newest first
    return data.applications.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

export async function updateApplicationStatus(
  applicationId: string,
  newStatus: ApplicationStatus,
  role: string = 'Trainee'
): Promise<{ success: boolean; message: string }> {
    try {
        const applicationsData = await readJsonFile<ApplicationsData>(applicationsFilePath);
        const mutableApplicationsData = JSON.parse(JSON.stringify(applicationsData));

        const appIndex = mutableApplicationsData.applications.findIndex((app: Application) => app.id === applicationId);

        if (appIndex === -1) {
            return { success: false, message: `Application with ID ${applicationId} not found.` };
        }
        
        const application = mutableApplicationsData.applications[appIndex];
        
        application.status = newStatus;
        await writeJsonFile(applicationsFilePath, mutableApplicationsData);
        
        revalidatePath('/admin/applications');
        revalidatePath('/application-status');
        
        await sendApplicationWebhookNotification(application);

        return { success: true, message: 'Application status updated successfully.' };
    } catch (error) {
        console.error('Error updating application status:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}

export async function deleteApplication(
    applicationId: string
): Promise<{ success: boolean; message: string }> {
    try {
        const applicationsData = await readJsonFile<ApplicationsData>(applicationsFilePath);
        const mutableApplicationsData = JSON.parse(JSON.stringify(applicationsData));
        
        const applicationIndex = mutableApplicationsData.applications.findIndex((b: Application) => b.id === applicationId);
        if (applicationIndex === -1) return { success: false, message: 'Application not found.' };

        mutableApplicationsData.applications.splice(applicationIndex, 1);
        
        await writeJsonFile(applicationsFilePath, mutableApplicationsData);
        
        revalidatePath('/admin/applications');
        
        return { success: true, message: `Application has been deleted.` };

    } catch (error) {
        console.error('Error deleting application:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}

// --- Booking and Event Actions ---

export async function getEventsWithBookings(): Promise<Event[]> {
    const data = await readJsonFile<EventsData>(eventsFilePath);
    return data.events.filter(event => event.slots && event.slots.some(slot => slot.bookings && slot.bookings.length > 0));
}

async function sendBookingWebhookNotification(booking: Booking, event: Event, newStatus: BookingStatus, areaId: string) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set.');
        return;
    }

    let title = '';
    let color = 0;
    let description = '';
    let imageUrl = '';
    
    const area = event.slots?.find(a => a.id === areaId);

    switch (newStatus) {
        case 'approved':
            title = `Booking Approved: ${booking.vtcName}`;
            color = 5763719; // Green
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been approved.`;
             if (area) {
                imageUrl = area.imageUrl;
            }
            break;
        case 'rejected':
             title = `Booking Rejected: ${booking.vtcName}`;
            color = 15548997; // Red
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been rejected.`;
            break;
        case 'hold':
            title = `Booking On Hold: ${booking.vtcName}`;
            color = 16753920; // Orange
            description = `The booking for **${booking.vtcName}** for slot **#${booking.slotNumber}** at event **${event.title}** has been put on hold.`;
            break;
        default:
            return;
    }


    const embed: any = {
        title: title,
        description: description,
        color: color,
        timestamp: new Date().toISOString(),
        footer: { text: 'Tamil Pasanga VTC | Slot Booking Update' },
    };

    if (newStatus === 'approved' && imageUrl) {
        embed.image = { url: imageUrl };
    }

    try {
        await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ embeds: [embed] }),
        });
    } catch (error) {
        console.error('Error sending booking status webhook:', error);
    }
}


export async function updateBookingStatus(
    eventId: string,
    areaId: string,
    bookingId: string,
    newStatus: BookingStatus
): Promise<{ success: boolean; message: string }> {
    try {
        const eventsData = await readJsonFile<EventsData>(eventsFilePath);
        const mutableEventsData = JSON.parse(JSON.stringify(eventsData));

        const event = mutableEventsData.events.find((e: Event) => e.id === eventId);
        if (!event || !event.slots) return { success: false, message: 'Event not found.' };

        const area = event.slots.find((a: SlotArea) => a.id === areaId);
        if (!area || !area.bookings) return { success: false, message: 'Slot area not found.' };
        
        const booking = area.bookings.find((b: Booking) => b.id === bookingId);
        if (!booking) return { success: false, message: 'Booking not found.' };

        booking.status = newStatus;
        
        await writeJsonFile(eventsFilePath, mutableEventsData);
        
        await sendBookingWebhookNotification(booking, event, newStatus, areaId);
        
        revalidatePath('/admin/bookings');
        revalidatePath(`/events/${eventId}`);
        
        return { success: true, message: `Booking status updated to ${newStatus}.` };

    } catch (error) {
        console.error('Error updating booking status:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}

export async function deleteBooking(
    eventId: string,
    areaId: string,
    bookingId: string
): Promise<{ success: boolean; message: string }> {
    try {
        const eventsData = await readJsonFile<EventsData>(eventsFilePath);
        const mutableEventsData = JSON.parse(JSON.stringify(eventsData));
        const event = mutableEventsData.events.find((e: Event) => e.id === eventId);
        if (!event || !event.slots) return { success: false, message: 'Event not found.' };

        const area = event.slots.find((a: SlotArea) => a.id === areaId);
        if (!area || !area.bookings) return { success: false, message: 'Slot area not found.' };
        
        const bookingIndex = area.bookings.findIndex((b: Booking) => b.id === bookingId);
        if (bookingIndex === -1) return { success: false, message: 'Booking not found.' };

        area.bookings.splice(bookingIndex, 1);
        
        await writeJsonFile(eventsFilePath, mutableEventsData);
        
        revalidatePath('/admin/bookings');
        revalidatePath(`/events/${eventId}`);
        
        return { success: true, message: `Booking has been deleted.` };

    } catch (error) {
        console.error('Error deleting booking:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
