
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Edit, Globe, Mail, MapPin, Milestone, Route, Star, Truck, Loader2, Calendar, Gamepad2, Settings, BarChart, BarChart2, Briefcase, Package, Coins, Weight, Fuel, CheckSquare } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AreaChart, Area, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { getProfileData, type UserProfile } from './actions';
import type { Job } from '@/lib/truckershub-types';


const userStatsData = [
  { name: 'May', distance: 0, nxp: 0 },
  { name: 'Jun', distance: 0, nxp: 0 },
  { name: 'Jul', distance: 0, nxp: 0 },
  { name: 'Aug', distance: 0, nxp: 0 },
  { name: 'Sep', distance: 1.0, nxp: 1.0 },
  { name: 'Oct', distance: 0, nxp: 0 },
];

const convoysAttendedData = [
  { name: 'May', convoys: 0 },
  { name: 'Jun', convoys: 0 },
  { name: 'Jul', convoys: 0 },
  { name: 'Aug', convoys: 0 },
  { name: 'Sep', convoys: 1 },
  { name: 'Oct', convoys: 0 },
];

const DetailItem = ({ label, value }: { label: string, value: string | number | null | undefined}) => (
    <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium">{value || 'N/A'}</span>
    </div>
);


export default function ProfilePage() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const bannerImage = PlaceHolderImages.find(p => p.id === 'events-banner');

    useEffect(() => {
        async function fetchProfile() {
            setIsLoading(true);
            try {
                // This is a placeholder. In a real app, you'd get the logged-in user's email.
                const userEmail = "lsk27102@gmail.com"; 
                const profileData = await getProfileData(userEmail);
                if (profileData) {
                    setUser(profileData);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchProfile();
    }, []);
    
    if (isLoading) {
        return (
            <div className="p-4 md:p-8 space-y-8 flex items-center justify-center h-[calc(100vh_-_8rem)]">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        return <div className="p-4 md:p-8 text-center">Failed to load profile. Please try again later.</div>
    }

    const registeredOn = new Date(user.registered).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' });

    return (
        <div className="space-y-8">
             {bannerImage && (
                <div className="relative h-48 w-full">
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
            )}
            <div className="p-4 md:p-8 -mt-24 space-y-8">
            <Card>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-1 flex flex-col items-center text-center">
                            <Avatar className="h-32 w-32 border-4 border-primary">
                                <AvatarImage src={user.avatar} alt={user.name}/>
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <h2 className="text-2xl font-bold mt-4">{user.name}</h2>
                            <div className="flex gap-2 mt-2">
                                <Badge variant="secondary">Newbie</Badge>
                                <Badge variant="outline">{user.role || "Driver"}</Badge>
                            </div>
                            <div className="flex gap-4 mt-4 text-muted-foreground">
                                <Link href={user.truckersmpUrl} target="_blank"><Truck size={20} className="hover:text-primary transition-colors" /></Link>
                                <Link href={`https://steamcommunity.com/id/${user.steamId}`} target="_blank"><Gamepad2 size={20} className="hover:text-primary transition-colors" /></Link>
                                <Link href={`https://truckershub.in/profile/${user.truckershubId}`} target="_blank"><Star size={20} className="hover:text-primary transition-colors" /></Link>
                            </div>
                            <Separator className="my-4" />
                            <div className="flex justify-around w-full">
                                <div className="text-center">
                                    <p className="font-bold text-lg">{user.total_km.toLocaleString()}</p>
                                    <p className="text-xs text-muted-foreground">Total KM</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg">{user.total_jobs}</p>
                                    <p className="text-xs text-muted-foreground">Total Jobs</p>
                                </div>
                            </div>
                             <div className="mt-4 w-full space-y-2">
                                <Button variant="default" size="sm" className="w-full" asChild>
                                    <Link href={`https://truckershub.in/profile/${user.truckershubId}`} target="_blank">
                                        <Briefcase className="mr-2 h-4 w-4" />
                                        View on TruckersHub
                                    </Link>
                                </Button>
                                 <Button variant="outline" size="sm" className="w-full" asChild>
                                    <Link href="/driver-hub/profile/settings">
                                        <Settings className="mr-2 h-4 w-4" />
                                       Account Settings
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="md:col-span-3">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">About</h3>
                                <p className="text-sm text-muted-foreground">No information available.</p>
                            </div>
                            <Separator className="my-4"/>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                    <DetailItem label="License Number:" value={user.license_number} />
                                    <DetailItem label="Total XP:" value={`${user.stats?.xp?.total.toLocaleString() || 0} XP`} />
                                    <DetailItem label="UserID:" value={user.id} />
                                    <DetailItem label="Total Income:" value={`€${user.stats?.income?.total.toLocaleString() || 0}`} />
                                    <DetailItem label="Steam ID:" value={user.steamId} />
                                    <DetailItem label="Total Weight Delivered:" value={`${user.stats?.weight?.total.toLocaleString() || 0} t`} />
                                     <DetailItem label="TruckersHub ID:" value={user.truckershubId} />
                                    <DetailItem label="Total Fuel Burned:" value={`${user.stats?.fuel_burned?.total.toLocaleString() || 0} L`} />
                                    <DetailItem label="Registered On:" value={registeredOn} />
                                    <DetailItem label="Convoys Attended:" value={0} />
                                    <DetailItem label="Role:" value={user.role || 'Driver'} />
                                    <DetailItem label="Timezone:" value={user.timezone} />
                                    <DetailItem label="Division:" value={user.division} />
                                    <DetailItem label="Games:" value="ETS2, ATS" />
                                    <DetailItem label="Country:" value={"India"} />
                                </div>
                            </div>
                             <Separator className="my-4"/>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Card>
                                    <CardHeader><CardTitle className="text-sm font-medium">ETS2</CardTitle></CardHeader>
                                    <CardContent className="space-y-2">
                                        <DetailItem label="Total KM" value={`${user.stats?.ets?.total_km.toLocaleString() || 0} km`} />
                                        <DetailItem label="Total Jobs" value={user.stats?.ets?.total_jobs.toLocaleString() || 0} />
                                        <DetailItem label="Longest Job" value={`${user.stats?.ets?.longest_job.toLocaleString() || 0} km`} />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="text-sm font-medium">ATS</CardTitle></CardHeader>
                                    <CardContent className="space-y-2">
                                         <DetailItem label="Total KM" value={`${user.stats?.ats?.total_km.toLocaleString() || 0} km`} />
                                        <DetailItem label="Total Jobs" value={user.stats?.ats?.total_jobs.toLocaleString() || 0} />
                                        <DetailItem label="Longest Job" value={`${user.stats?.ats?.longest_job.toLocaleString() || 0} km`} />
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>Awards & Achievements</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground text-center">No awards available.</p></CardContent>
            </Card>

             <Card>
                <CardHeader><CardTitle>Position History Timeline</CardTitle></CardHeader>
                <CardContent className="text-center">
                    <div className="bg-yellow-100/10 border border-yellow-400/50 text-yellow-300 rounded-md p-4 inline-block">
                        No position history found for this user.
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>User's Statistics</CardTitle>
                </CardHeader>
                <CardContent className="h-60">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={userStatsData}>
                            <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                            <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12}/>
                            <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                            <Legend />
                            <Line type="monotone" dataKey="distance" name="Distance (km)" stroke="hsl(var(--primary))" yAxisId={0} />
                            <Line type="monotone" dataKey="nxp" name="NXP" stroke="hsl(var(--chart-2))" yAxisId={0} />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Monthly Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>From To</TableHead>
                                <TableHead>Cargo</TableHead>
                                <TableHead>Distance</TableHead>
                                <TableHead>NXP</TableHead>
                                <TableHead>Game</TableHead>
                                <TableHead>Speed</TableHead>
                                <TableHead>Damage</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {user.jobs && user.jobs.length > 0 ? (
                                user.jobs.map((job: Job) => (
                                    <TableRow key={job.id}>
                                        <TableCell>{new Date(job.started_at).toLocaleDateString()}</TableCell>
                                        <TableCell className="flex items-center gap-2"><MapPin size={16} />{job.start_city} to {job.destination_city}</TableCell>
                                        <TableCell className="flex items-center gap-2"><Package size={16} />{job.cargo}</TableCell>
                                        <TableCell>{job.distance} km</TableCell>
                                        <TableCell>{job.xp}</TableCell>
                                        <TableCell>{job.game}</TableCell>
                                        <TableCell>{job.average_speed} km/h</TableCell>
                                        <TableCell>{job.damage}%</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow><TableCell colSpan={8} className="text-center">No data available in table</TableCell></TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <Card>
                <CardHeader><CardTitle>Convoys</CardTitle></CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Title</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow><TableCell colSpan={2} className="text-center">No data available in table</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
            </div>

        </div>
    );
}
