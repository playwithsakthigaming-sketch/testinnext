
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Clock,
    MapPin,
    Users,
    ChevronRight,
    Calendar,
    Globe,
    Map,
    X,
    Truck,
} from 'lucide-react';
import type { Event } from '@/lib/events';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { EventBookingDialog } from '@/components/app/event-booking-dialog';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';


type EventWithImage = Event & { image: ImagePlaceholder | undefined };

type TruckersMPEvent = {
    response: {
        id: number;
        name: string;
        attendances: {
            confirmed: number;
            vtcs: number;
        }
    }
}

export function EventDetailClient({ event }: { event: EventWithImage }) {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    const [truckersMPAttendance, setTruckersMPAttendance] = useState<{ confirmed: number, vtcs: number } | null>(null);
    const [isLoadingAttendance, setIsLoadingAttendance] = useState(true);

    const { image } = event;
    
    const fetchTruckersMPData = async () => {
        if (event.url && event.url.includes('truckersmp.com/events/')) {
            const eventId = event.url.split('truckersmp.com/events/')[1]?.split('-')[0];
            if (eventId && !isNaN(parseInt(eventId))) {
                setIsLoadingAttendance(true);
                try {
                    const res = await fetch(`/api/truckersmp?endpoint=events/${eventId}`);
                    if (res.ok) {
                        const data: TruckersMPEvent = await res.json();
                        if(data.response) {
                            setTruckersMPAttendance(data.response.attendances);
                        }
                    }
                } catch (error) {
                    console.error("Failed to fetch TruckersMP event data:", error);
                } finally {
                    setIsLoadingAttendance(false);
                }
            } else {
                setIsLoadingAttendance(false);
            }
        } else {
            setIsLoadingAttendance(false);
        }
    };

    useEffect(() => {
        fetchTruckersMPData();
        const intervalId = setInterval(fetchTruckersMPData, 30000); // Auto-refresh every 30 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [event.url]);

    
    const confirmedAttendees = truckersMPAttendance?.confirmed ?? 0;
    const participatingVtcs = truckersMPAttendance?.vtcs ?? 0;
    
    const totalFreeSlots = event.slots?.reduce((total, area) => {
        const totalInArea = (area.endSlot - area.startSlot + 1);
        const bookedInArea = area.bookings?.filter(b => b.status === 'approved' || b.status === 'hold').length || 0;
        return total + (totalInArea - bookedInArea);
    }, 0) || 0;

    return (
        <main className="flex-grow">
            {/* Banner Section */}
            <div className="relative h-[40vh] w-full text-white">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={image.description || 'Event banner'}
                        fill
                        className="object-cover"
                        data-ai-hint={image.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute bottom-0 left-0 container mx-auto px-4 py-8">
                    <h1 className="text-5xl font-headline font-bold mb-4">{event.title}</h1>
                    <div className="flex items-center gap-4 text-lg">
                        <span className="flex items-center gap-2 bg-red-500/80 text-white px-4 py-2 rounded-full text-xl font-bold transition-transform duration-300 hover:scale-110"> <Clock size={20}/> UPCOMING</span>
                        <span className="flex items-center gap-2 bg-green-500/80 text-white px-4 py-2 rounded-full text-xl font-bold transition-transform duration-300 hover:scale-110">
                            <Users size={20}/> 
                            {isLoadingAttendance ? <Skeleton className="h-5 w-8" /> : <span>{confirmedAttendees} attending</span>}
                        </span>
                        {participatingVtcs > 0 && (
                             <span className="flex items-center gap-2 bg-blue-500/80 text-white px-4 py-2 rounded-full text-xl font-bold transition-transform duration-300 hover:scale-110">
                                <Truck size={20}/> 
                                {isLoadingAttendance ? <Skeleton className="h-5 w-8" /> : <span>{participatingVtcs} VTCs</span>}
                            </span>
                        )}
                        <span className="flex items-center gap-1 text-2xl"><MapPin size={24}/> {event.departure} <ChevronRight size={24} /> {event.arrival}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                         <Card className="animated-border bg-transparent p-[2px]">
                            <div className="bg-card rounded-lg h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><Calendar size={20}/> Event Schedule</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold">Meetup Time</p>
                                        <p className="text-muted-foreground">{event.meetupTime}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Departure Time</p>
                                        <p className="text-muted-foreground">{event.departureTime}</p>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>

                        <Card className="animated-border bg-transparent p-[2px]">
                            <div className="bg-card rounded-lg h-full">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2"><MapPin size={20}/> Route Details</CardTitle>
                                </CardHeader>
                                <CardContent className="grid grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-semibold">Departure</p>
                                        <p className="text-muted-foreground">{event.departure}</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Arrival</p>
                                        <p className="text-muted-foreground">{event.arrival}</p>
                                    </div>
                                     <div className="col-span-2">
                                        <p className="font-semibold">Server</p>
                                        <p className="text-muted-foreground">{event.server}</p>
                                    </div>
                                </CardContent>
                            </div>
                        </Card>
                        
                        <div className="space-y-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Event Description</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{event.description}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Event Rules</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{event.rules}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Right Column (Sidebar) */}
                    <div className="space-y-8">
                         <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button asChild className="w-full" variant="outline"><Link href={event.url} target="_blank"><Globe/> Visit Event Website</Link></Button>
                                {event.routeMapUrl && (
                                    <Button asChild className="w-full" variant="outline"><Link href={event.routeMapUrl} target="_blank"><Map/> View Route Map</Link></Button>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Event Statistics</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex justify-between items-center">
                                    <p>Confirmed Attendees</p>
                                    {isLoadingAttendance ? <Skeleton className="h-5 w-10"/> : <p className="font-bold">{confirmedAttendees}</p>}
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <p>VTCs Participating</p>
                                    {isLoadingAttendance ? <Skeleton className="h-5 w-10"/> : <p className="font-bold">{participatingVtcs}</p>}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {event.slots && event.slots.length > 0 && (
                    <section id="event-slots" className="mt-16">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-3xl font-headline text-primary">Event Slots</h2>
                            <p className="text-muted-foreground font-bold">{totalFreeSlots} free slots available</p>
                        </div>
                        <p className="text-center text-muted-foreground mb-8">Come back after sometime to check your slot&apos;s booking status!</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {event.slots.map(area => {
                                const totalSlots = area.endSlot - area.startSlot + 1;
                                const bookings = area.bookings || [];
                                
                                const allSlotNumbers = Array.from({ length: totalSlots }, (_, i) => area.startSlot + i);
                                
                                const slotData = allSlotNumbers.map(num => {
                                    const booking = bookings.find(b => b.slotNumber === num);
                                    return {
                                        number: num,
                                        isBooked: !!booking,
                                        bookingInfo: booking
                                    };
                                });

                                const availableSlots = slotData.filter(s => !s.isBooked || s.bookingInfo?.status === 'rejected').map(s => s.number);

                                return (
                                    <Card key={area.id} className="animated-border bg-transparent p-[2px] shadow-lg flex flex-col">
                                        <div className="bg-card rounded-lg h-full flex flex-col">
                                            <CardHeader className="p-0">
                                                <div className="relative aspect-video cursor-pointer" onClick={() => setLightboxImage(area.imageUrl)}>
                                                    <Image
                                                        src={area.imageUrl}
                                                        alt={area.areaName}
                                                        fill
                                                        className="object-cover rounded-t-lg"
                                                    />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="p-4 flex-grow flex flex-col">
                                                <p className="text-center text-sm text-primary mb-2">Click on the image to view</p>
                                                <div className="flex justify-center gap-2 mb-4">
                                                    <Badge variant={availableSlots.length > 0 ? 'default' : 'destructive'} className={cn('text-lg', availableSlots.length > 0 && 'bg-green-500')}>
                                                        {availableSlots.length} slots available
                                                    </Badge>
                                                    <Badge variant="secondary" className="text-lg">{totalSlots} total slots</Badge>
                                                </div>

                                                <div className="mb-4">
                                                    <p className="font-semibold mb-2 text-lg">Bookings:</p>
                                                    <div className="space-y-3">
                                                        {slotData.map(slot => {
                                                            if (slot.bookingInfo) {
                                                                return (
                                                                     <div key={slot.number} className="flex justify-between items-center text-lg">
                                                                        <p className="font-medium">Slot {slot.number}: {slot.bookingInfo.vtcName}</p>
                                                                        <Badge variant="default" className={cn("capitalize", slot.bookingInfo.status === 'approved' && 'bg-green-600', slot.bookingInfo.status === 'pending' && 'bg-yellow-600', slot.bookingInfo.status === 'rejected' && 'bg-red-600', slot.bookingInfo.status === 'hold' && 'bg-orange-600' )}>{slot.bookingInfo.status}</Badge>
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <div key={slot.number} className="flex justify-between items-center text-lg">
                                                                    <p className="font-medium text-muted-foreground">Slot {slot.number}</p>
                                                                    <Badge variant="outline" className="text-green-500 border-green-500">Available</Badge>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                
                                                <EventBookingDialog 
                                                    eventId={event.id} 
                                                    area={area} 
                                                    availableSlots={availableSlots}
                                                >
                                                    <Button className="w-full mt-auto" disabled={availableSlots.length === 0}>
                                                        {availableSlots.length > 0 ? 'Request Slot' : 'No Slots Available'}
                                                    </Button>
                                                </EventBookingDialog>
                                            </CardContent>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </section>
                )}
            </div>
            {lightboxImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={() => setLightboxImage(null)}>
                    <div className="relative w-full h-full max-w-6xl max-h-[90%]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={lightboxImage}
                            alt="Slot Map Lightbox"
                            fill
                            style={{ objectFit: 'contain' }}
                            className="rounded-lg"
                        />
                        <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}
