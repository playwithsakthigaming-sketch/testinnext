
import { notFound } from 'next/navigation';
import eventsData from '@/lib/events.json';
import type { Event } from '@/lib/events';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { EventDetailClient } from '@/app/events/[id]/event-detail-client';

const getEvent = (id: string): (Event & { image: ImagePlaceholder | undefined }) | undefined => {
    const event = eventsData.events.find(event => event.id === id);
    if (!event) {
        return undefined;
    }
    const image = PlaceHolderImages.find(p => p.id === event.imageId);
    return { ...event, image };
}

export default function DriverHubEventDetailPage({ params }: { params: { id: string } }) {
    const event = getEvent(params.id);

    if (!event) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <EventDetailClient event={event} />
        </div>
    );
}
