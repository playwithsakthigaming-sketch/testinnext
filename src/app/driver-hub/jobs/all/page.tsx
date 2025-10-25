
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Package, MapPin, CheckCircle, AlertTriangle, PlayCircle, RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAllVtcJobs } from '@/app/driver-hub/(hub)/actions';
import type { Job } from '@/lib/truckershub-types';


const statusConfig = {
    finished: { icon: <CheckCircle className="text-green-500" />, label: "Finished" },
    ongoing: { icon: <PlayCircle className="text-blue-500" />, label: "Ongoing" },
    cancelled: { icon: <AlertTriangle className="text-red-500" />, label: "Cancelled" },
};

const months = [
    { value: '1', label: 'January' }, { value: '2', label: 'February' },
    { value: '3', label: 'March' }, { value: '4', label: 'April' },
    { value: '5', label: 'May' }, { value: '6', label: 'June' },
    { value: '7', label: 'July' }, { value: '8', label: 'August' },
    { value: '9', label: 'September' }, { value: '10', label: 'October' },
    { value: '11', label: 'November' }, { value: '12', label: 'December' }
];

const years = Array.from({ length: 10 }, (_, i) => String(new Date().getFullYear() - i));


export default function AllJobsPage() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSyncing, setIsSyncing] = useState(false);
    const [month, setMonth] = useState<string | undefined>(undefined);
    const [year, setYear] = useState<string | undefined>(undefined);

    const fetchJobs = async (m?: string, y?: string) => {
        setIsLoading(true);
        const jobsData = await getAllVtcJobs(m, y);
        setJobs(jobsData);
        setIsLoading(false);
    };
    
    const handleSync = async () => {
        setIsSyncing(true);
        await fetchJobs(month, year);
        setIsSyncing(false);
    }

    useEffect(() => {
        const currentMonth = String(new Date().getMonth() + 1);
        const currentYear = String(new Date().getFullYear());
        setMonth(currentMonth);
        setYear(currentYear);
        fetchJobs(currentMonth, currentYear);
    }, []);

    const handleFilter = () => {
        fetchJobs(month, year);
    };

    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>All Jobs</CardTitle>
                    <CardDescription>A list of all jobs submitted by drivers in the VTC.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <Select value={month} onValueChange={setMonth}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Select Month" />
                            </SelectTrigger>
                            <SelectContent>
                                {months.map(m => <SelectItem key={m.value} value={m.value}>{m.label}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Select value={year} onValueChange={setYear}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Select Year" />
                            </SelectTrigger>
                            <SelectContent>
                                {years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}
                            </SelectContent>
                        </Select>
                        <Button onClick={handleFilter} disabled={isLoading}>
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Filter
                        </Button>
                        <Button onClick={handleSync} disabled={isSyncing || isLoading} variant="outline">
                             {isSyncing ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Syncing...
                                </>
                            ) : (
                                <>
                                    <RefreshCw className="mr-2 h-4 w-4" />
                                    Sync with TruckersHub
                                </>
                            )}
                        </Button>
                    </div>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Driver</TableHead>
                                <TableHead>Route</TableHead>
                                <TableHead>Cargo</TableHead>
                                <TableHead>Distance</TableHead>
                                <TableHead>Game</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {isLoading ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center h-24">
                                        <Loader2 className="mx-auto h-8 w-8 animate-spin text-primary" />
                                    </TableCell>
                                </TableRow>
                            ) : jobs.length > 0 ? jobs.map((job) => (
                                <TableRow key={job.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {job.driver ? (
                                                <>
                                                    <Image src={job.driver.avatar} alt={job.driver.username} width={32} height={32} className="rounded-full" />
                                                    <span>{job.driver.username}</span>
                                                </>
                                            ) : <span>-</span>}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-muted-foreground"/>
                                            <span>{job.start_city} to {job.destination_city}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                             <Package size={16} className="text-muted-foreground"/>
                                            <span>{job.cargo}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{job.distance.toLocaleString()} km</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{job.game}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {statusConfig[job.status]?.icon}
                                            {statusConfig[job.status]?.label}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button asChild variant="outline" size="sm">
                                            <Link href={`/driver-hub/jobs/${job.id}`}>Details</Link>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center">
                                        No jobs found.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
