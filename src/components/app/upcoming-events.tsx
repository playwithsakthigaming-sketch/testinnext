
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Loader2 } from 'lucide-react';
import Link from 'next/link';
import type { Event } from '@/lib/events';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getEvents } from '@/app/events/actions';
import { parseEventDate } from '@/lib/date-utils';

type UpcomingEventsProps = {
  initialEvents: Event[];
};

export function UpcomingEvents({ initialEvents }: UpcomingEventsProps) {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      const freshEvents = await getEvents();
      setEvents(freshEvents);
      setIsLoading(false);
    };

    fetchEvents();
    
    const interval = setInterval(fetchEvents, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);

  }, []);

  const now = new Date();
  const upcomingEvents = events
    .map(event => ({
      ...event,
      parsedDate: parseEventDate(event.meetupTime || event.date)
    }))
    .filter(event => event.parsedDate && event.parsedDate > now)
    .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime())
    .slice(0, 3)
    .map(event => {
      const image = PlaceHolderImages.find(img => img.id === event.imageId);
      return { ...event, image };
    });

  return (
    <section id="events" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline">Upcoming Events</h2>
          <p className="text-muted-foreground mt-2">Join us for our next convoy!</p>
        </div>
        {isLoading ? (
          <div className="flex justify-center"><Loader2 className="h-8 w-8 animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => {
              const linkHref = event.type === 'partner' ? event.url : `/events/${event.id}`;
              const hasSlots = event.type === 'internal' && event.slots && event.slots.length > 0;
              return (
                <Card key={event.id} className="flex flex-col bg-card border-border/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 group">
                  {event.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={event.image.imageUrl}
                        alt={event.image.description || ''}
                        fill
                        className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={event.image.imageHint}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.meetupTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.departure}</span>
                    </div>
                  </CardContent>
                  <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2 mt-auto">
                    <Button asChild className="w-full">
                      <Link href={linkHref} target={event.type === 'partner' ? '_blank' : '_self'}>
                        {event.type === 'internal' ? 'Event Details' : 'View Event'}
                      </Link>
                    </Button>
                    {hasSlots && (
                      <Button asChild className="w-full" variant="outline">
                        <Link href={`/events/${event.id}#event-slots`}>
                          Slot Booking
                        </Link>
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        )}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
