
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Driver } from "@/lib/truckershub-types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDrivers } from "../actions";


export default async function MembersPage() {
    const drivers = await getDrivers();
    const bannerImage = PlaceHolderImages.find(p => p.id === 'events-banner');

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
             <div className="p-4 md:p-8 -mt-24">
                <Card>
                    <CardHeader>
                        <CardTitle>VTC Members</CardTitle>
                        <CardDescription>List of all drivers in the company.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Driver</TableHead>
                                    <TableHead>SteamID</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Total KM</TableHead>
                                    <TableHead>Jobs Completed</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {drivers.map((driver) => (
                                    <TableRow key={driver.id}>
                                        <TableCell>
                                            <div className="flex items-center gap-3">
                                                <Image src={driver.avatar} alt={driver.username} width={40} height={40} className="rounded-full" />
                                                <span className="font-medium">{driver.username}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="link" asChild>
                                                <Link href={`https://steamcommunity.com/profiles/${driver.steam_id}`} target="_blank">
                                                    {driver.steam_id}
                                                </Link>
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{driver.role.name}</Badge>
                                        </TableCell>
                                        <TableCell>{driver.total_km.toLocaleString()} km</TableCell>
                                        <TableCell>{driver.total_jobs.toLocaleString()} jobs</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
