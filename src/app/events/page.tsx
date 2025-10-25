
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/app/header';
import { Footer } from '@/components/app/footer';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar, Loader2 } from 'lucide-react';
import type { Event } from '@/lib/events';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { getEvents } from './actions';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { parseEventDate } from '@/lib/date-utils';


const bannerImage = PlaceHolderImages.find(p => p.id === 'events-banner');

const EventCard = ({ event }: { event: Event }) => {
    const image = PlaceHolderImages.find(p => p.id === event.imageId);
    const linkHref = event.type === 'internal' ? `/events/${event.id}` : event.url;
    
    return (
        <Card className="bg-card border-border/50 shadow-lg hover:shadow-primary/20 transition-shadow duration-300 flex flex-col group">
            {image && image.imageUrl && (
                <div className="relative h-40 w-full">
                    <Image
                        src={image.imageUrl}
                        alt={image.description || 'Event banner'}
                        fill
                        className="object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                    />
                </div>
            )}
            <CardContent className="p-4 flex-grow flex flex-col">
                <h3 className="font-headline text-lg mb-2 flex-grow">{event.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Button asChild className="w-full">
                         <Link href={linkHref} target={event.type === 'partner' ? '_blank' : '_self'}>
                            {event.type === 'internal' ? 'Event Details' : 'View Event'}
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

const PARTNER_EVENTS_PER_PAGE = 6;

export default function EventsPage() {
    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [partnerEventsPage, setPartnerEventsPage] = useState(1);

    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            const events = await getEvents();
            setAllEvents(events);
            setIsLoading(false);
        };
        fetchEvents();
    }, []);
    
    const now = new Date();

    const futureEvents = allEvents.filter(event => {
        const eventDate = parseEventDate(event.date);
        return eventDate ? eventDate > now : false;
    });

    const upcomingEvents = futureEvents.filter(e => e.type === 'internal');
    const partnerEvents = futureEvents.filter(e => e.type === 'partner');
    
    const totalPartnerPages = Math.ceil(partnerEvents.length / PARTNER_EVENTS_PER_PAGE);
    const paginatedPartnerEvents = partnerEvents.slice(
        (partnerEventsPage - 1) * PARTNER_EVENTS_PER_PAGE,
        partnerEventsPage * PARTNER_EVENTS_PER_PAGE
    );

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                {bannerImage &&
                    <div className="relative h-64 w-full">
                        <Image
                            src={bannerImage.imageUrl}
                            alt={bannerImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={bannerImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h1 className="text-4xl font-headline text-white">Our Events</h1>
                        </div>
                    </div>
                }

                <div className="container mx-auto px-4 py-16">
                    {isLoading ? (
                         <div className="flex justify-center items-center h-64">
                            <Loader2 className="h-16 w-16 animate-spin text-primary" />
                        </div>
                    ) : (
                        <>
                            <section id="upcoming-events" className="mb-16">
                                <h2 className="text-3xl font-headline text-center mb-8 text-primary">Upcoming Tamil Pasanga Events</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {upcomingEvents.length > 0 ? (
                                        upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
                                    ) : (
                                        <p className="col-span-full text-center text-muted-foreground">No upcoming internal events.</p>
                                    )}
                                </div>
                            </section>

                            <section id="partner-events">
                                <h2 className="text-3xl font-headline text-center mb-8 text-primary">Where We'll Be Next</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {paginatedPartnerEvents.length > 0 ? (
                                        paginatedPartnerEvents.map(event => <EventCard key={event.id} event={event} />)
                                    ) : (
                                         <p className="col-span-full text-center text-muted-foreground">No upcoming partner events.</p>
                                    )}
                                </div>

                                {totalPartnerPages > 1 && (
                                     <Pagination className="mt-12">
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious 
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setPartnerEventsPage(p => Math.max(1, p - 1));
                                                    }}
                                                    className={partnerEventsPage === 1 ? 'pointer-events-none opacity-50' : ''}
                                                />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <span className="p-2 text-muted-foreground">Page {partnerEventsPage} of {totalPartnerPages}</span>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setPartnerEventsPage(p => Math.min(totalPartnerPages, p + 1));
                                                    }}
                                                     className={partnerEventsPage === totalPartnerPages ? 'pointer-events-none opacity-50' : ''}
                                                />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
                                )}
                            </section>
                        </>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
