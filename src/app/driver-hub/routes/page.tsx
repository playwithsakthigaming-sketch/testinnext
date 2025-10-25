
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getRoutes } from "@/app/driver-hub/(hub)/actions";
import { Badge } from "@/components/ui/badge";
import { MapPin, Milestone } from "lucide-react";

export default async function RoutesPage() {
    const routes = await getRoutes();

    return (
        <div className="p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Company Routes</CardTitle>
                    <CardDescription>Official routes for VTC drivers.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Route</TableHead>
                                <TableHead>Cargo</TableHead>
                                <TableHead>Distance</TableHead>
                                <TableHead>Game</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {routes.map((route) => (
                                <TableRow key={route.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} className="text-muted-foreground"/>
                                            <span>{route.origin} to {route.destination}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{route.cargo}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Milestone size={16} className="text-muted-foreground"/>
                                            <span>{route.distance.toLocaleString()} km</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{route.game}</Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
