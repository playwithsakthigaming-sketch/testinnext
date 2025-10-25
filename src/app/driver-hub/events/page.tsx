

'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import eventsData from '@/lib/events.json';
import { useRouter } from 'next/navigation';
import { parseEventDate } from '@/lib/date-utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

type CalendarEvent = {
    title: string;
    start: Date;
    allDay: boolean;
    extendedProps: {
        id: string;
    };
    backgroundColor: string;
    borderColor: string;
};


export default function DriverHubEventsPage() {
    const router = useRouter();

    const formattedEvents: CalendarEvent[] = eventsData.events.map(event => {
        const start = parseEventDate(event.meetupTime);
        const isInternal = event.type === 'internal';

        return {
            title: event.title,
            start: start || new Date(event.date),
            allDay: false, // Assuming events are at specific times
            extendedProps: { id: event.id },
            backgroundColor: isInternal ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
            borderColor: isInternal ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
        };
    }).filter(e => e.start !== null);

    const handleEventClick = (clickInfo: any) => {
        const eventId = clickInfo.event.extendedProps.id;
        router.push(`/driver-hub/events/${eventId}`);
    };

    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardContent className="p-4">
                     <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay closeButton'
                        }}
                        customButtons={{
                            closeButton: {
                                text: 'Close',
                                click: () => router.push('/driver-hub'),
                            },
                        }}
                        events={formattedEvents}
                        eventClick={handleEventClick}
                        height="auto"
                        contentHeight="auto"
                        aspectRatio={1.5}
                        eventTimeFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            meridiem: 'short'
                        }}
                     />
                </CardContent>
            </Card>
        </div>
    );
}
