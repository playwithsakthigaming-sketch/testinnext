
'use client';

import React, { useState, useEffect } from 'react';
import { AreaChart, Area, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { Bell, HelpCircle, User, Truck, Calendar, Flame, Dot, Users, Settings, LogOut, Loader2, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Event } from '@/lib/events';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { VtcStats, LeaderboardUser, Job, LiveDriver } from '@/lib/truckershub-types';
import type { UserProfile } from '../profile/actions';
import { getDashboardData } from './actions';
import eventsData from '@/lib/events.json';
import { parseEventDate } from '@/lib/date-utils';
import { getProfileData } from '../profile/actions';

const StatCard = ({ title, value, icon, className = '' }: { title: string, value: string, icon: React.ReactNode, className?: string }) => (
    <Card className={`bg-card/80 backdrop-blur-sm ${className}`}>
        <CardContent className="p-4">
            <div className="flex items-center gap-4">
                {icon}
                <div>
                    <p className="text-sm text-muted-foreground">{title}</p>
                    <p className="text-2xl font-bold">{value}</p>
                </div>
            </div>
        </CardContent>
    </Card>
);

const monthlyJobsData = [
  { name: 'Jun', jobs: 2500 },
  { name: 'Jul', jobs: 2000 },
  { name: 'Aug', jobs: 1800 },
  { name: 'Sep', jobs: 1500 },
  { name: 'Oct', jobs: 500 },
];

const goalData = [
  { name: 'Completed', value: 80 },
  { name: 'Left', value: 20 },
];
const COLORS = ['#3CB371', '#0d342f'];

type DashboardPageProps = {
    stats: VtcStats | null;
    allTime: LeaderboardUser[] | null;
    monthly: LeaderboardUser[] | null;
    jobs: Job[] | null;
    user: { username: string } | null;
    liveDrivers: LiveDriver[] | null;
}

const getGreeting = () => {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata', hour: 'numeric', hour12: false };
    const hour = parseInt(new Intl.DateTimeFormat('en-US', options).format(now));

    if (hour >= 5 && hour < 12) {
        return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
        return 'Good Afternoon';
    } else if (hour >= 17 && hour < 21) {
        return 'Good Evening';
    } else {
        return 'Good Night';
    }
};

const getNearestPartnerEvent = (): (Event & { image: any }) | null => {
    const now = new Date();
    const partnerEvents = eventsData.events
        .filter(e => e.type === 'partner')
        .map(e => ({...e, parsedDate: parseEventDate(e.meetupTime || e.date)}))
        .filter(e => e.parsedDate && e.parsedDate > now)
        .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime());
    
    if (partnerEvents.length === 0) return null;

    const nearestEvent = partnerEvents[0];
    const image = PlaceHolderImages.find(p => p.id === nearestEvent.imageId);
    
    return { ...nearestEvent, image };
};


export function DashboardClientPage({ initialDashboardData, initialNearestPartnerEvent, initialUserProfile }: { initialDashboardData: DashboardPageProps | null, initialNearestPartnerEvent: (Event & { image: any }) | null, initialUserProfile: UserProfile | null }) {
    const [greeting, setGreeting] = useState('');
    const [dashboardData, setDashboardData] = useState(initialDashboardData);
    const [nearestPartnerEvent, setNearestPartnerEvent] = useState(initialNearestPartnerEvent);
    const [userProfile, setUserProfile] = useState(initialUserProfile);
    const [isLoading, setIsLoading] = useState(!initialDashboardData);


    useEffect(() => {
        setGreeting(getGreeting());
        const greetingInterval = setInterval(() => setGreeting(getGreeting()), 60000);

        const fetchData = async () => {
            try {
                const [data, profileData] = await Promise.all([
                    getDashboardData(),
                    getProfileData("lsk27102@gmail.com")
                ]);

                setDashboardData(data);
                setUserProfile(profileData);
                setNearestPartnerEvent(getNearestPartnerEvent());

            } catch (error) {
                console.error("Failed to refresh dashboard data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!initialDashboardData) {
            fetchData();
        }

        const dataInterval = setInterval(fetchData, 30000);

        return () => {
            clearInterval(greetingInterval);
            clearInterval(dataInterval);
        };
    }, [initialDashboardData]);

    if (isLoading || !dashboardData || !userProfile) {
        return <div className="p-8 text-center"><Loader2 className="mx-auto h-12 w-12 animate-spin" /> <p className="mt-4">Loading dashboard...</p></div>;
    }
    const { stats, allTime, monthly, jobs, user, liveDrivers } = dashboardData;
    const vtcStats = stats;
    const allTimeLeaderboard: LeaderboardUser[] = allTime || [];
    const monthlyLeaderboard: LeaderboardUser[] = monthly || [];
    const recentJobs: Job[] = jobs || [];
    const username = userProfile?.name || user?.username || "Driver";
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero-truck');
    const activeDriversCount = liveDrivers?.length ?? 0;
    const totalDrivers = vtcStats?.total_drivers ?? 0;

    return (
        <div className="p-4 md:p-8 space-y-6 bg-background text-white">
            {/* Header */}
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-primary">{greeting} {username}</h1>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon"><Bell size={18} /></Button>
                    <Button variant="ghost" size="icon"><HelpCircle size={18} /></Button>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-9 w-9 cursor-pointer">
                                <AvatarImage src={userProfile?.avatar} alt="User avatar" />
                                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="/driver-hub/profile">
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </Link>
                            </DropdownMenuItem>
                             <DropdownMenuItem asChild>
                                <Link href="/driver-hub/profile/settings">
                                    <Settings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                             <DropdownMenuItem asChild>
                                <Link href="/">
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>Logout</span>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {/* Hero Section */}
            {heroImage &&
                <Card className="relative overflow-hidden bg-card border-0 h-64">
                        <Image src={heroImage.imageUrl} alt={heroImage.description} layout="fill" objectFit="cover" className="z-0" />
                        <div className="absolute inset-0 bg-black/60"/>
                        <CardContent className="relative z-10 p-6 flex flex-col justify-center h-full text-center items-center">
                            <h2 className="text-4xl font-headline font-bold text-white">Welcome to Tamil Pasanga VTC</h2>
                            <p className="text-muted-foreground mt-2 max-w-2xl">The premier virtual trucking company where passion for the open road meets a vibrant community spirit. Great Experience, We Believe In Quality Not Quantity</p>
                        </CardContent>
                </Card>
            }


            {/* Stats Cards */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Live" value={activeDriversCount.toString()} icon={<Users size={24} />} />
                <StatCard title="Total Drivers" value={totalDrivers > 0 ? totalDrivers.toLocaleString() : '...'} icon={<Users size={24} />} />
                <StatCard title="Total Distance" value={`${vtcStats?.total_distance?.toLocaleString() || '...'} kms`} icon={<MapPin size={24} />} />
                <StatCard title="Total Jobs" value={vtcStats?.total_jobs?.toLocaleString() || '...'} icon={<Briefcase size={24} />} />
            </div>

            {/* Upcoming Event */}
            {nearestPartnerEvent && nearestPartnerEvent.image && (
                <Card className="relative overflow-hidden bg-transparent border-0">
                    <Image src={nearestPartnerEvent.image.imageUrl} alt={nearestPartnerEvent.title} layout="fill" objectFit="cover" className="z-0" />
                    <div className="absolute inset-0 bg-black/50"/>
                    <CardHeader>
                        <CardTitle>Latest Event Highlights</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10 p-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-pink-300">Upcoming Partner Event</p>
                            <h2 className="text-xl font-bold mt-1">{nearestPartnerEvent.title}</h2>
                            <p className="text-sm text-muted-foreground mt-1">{nearestPartnerEvent.meetupTime}</p>
                        </div>
                         <Button asChild>
                            <Link href={nearestPartnerEvent.url} target="_blank">Details</Link>
                        </Button>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
