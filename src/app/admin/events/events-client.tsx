
'use client';

import { useState, useTransition, useEffect, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, FilePenLine, RefreshCw, Loader2, ListPlus, Bell, Search, ArrowUpDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DeleteEventDialog } from "./delete-event-dialog";
import { Badge } from "@/components/ui/badge";
import { syncEventsFromTruckersMP, sendEventReminder } from './actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { AddEventByIdDialog } from './add-event-by-id-dialog';
import type { Event } from "@/lib/events";
import { Input } from '@/components/ui/input';
import { parseEventDate } from '@/lib/date-utils';

function EventRowActions({ event }: { event: Event }) {
  const [isSending, startTransition] = useTransition();
  const { toast } = useToast();
  
  const handleRemind = () => {
    startTransition(async () => {
      const result = await sendEventReminder(event.id);
      if (result.success) {
        toast({ title: 'Success', description: result.message });
      } else {
        toast({ variant: 'destructive', title: 'Error', description: result.message });
      }
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/events/${event.id}`} target='_blank'>
            <FilePenLine className="mr-2 h-4 w-4" />
            View
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/admin/events/edit/${event.id}`}>
            <FilePenLine className="mr-2 h-4 w-4" />
            Edit
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleRemind} disabled={isSending}>
           {isSending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <Bell className="mr-2 h-4 w-4" />
            )}
          Remind
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DeleteEventDialog eventId={event.id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

type SortKey = 'title' | 'date' | 'type';

export function EventsClient({ events }: { events: Event[] }) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: SortKey; direction: 'asc' | 'desc' } | null>({ key: 'date', direction: 'desc' });
  const { toast } = useToast();
  const router = useRouter();

  const handleSync = async (isAutoSync = false) => {
    if (!isAutoSync) setIsSyncing(true);
    const result = await syncEventsFromTruckersMP();
     if (!isAutoSync) setIsSyncing(false);

    if (result.success) {
      // For auto-sync, only show toast if there's a change to avoid being noisy.
      if (!isAutoSync || result.added > 0) {
        toast({
          title: "Sync Complete",
          description: result.message,
        });
      }
      if (result.added > 0) {
        router.refresh();
      }
    } else {
      if (!isAutoSync) {
        toast({
            variant: "destructive",
            title: "Sync Failed",
            description: result.message,
        });
      }
    }
  };
  
  useEffect(() => {
    // Auto-sync on component mount
    handleSync(true);
    const intervalId = setInterval(() => handleSync(true), 30000); // Auto-refresh every 30 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestSort = (key: SortKey) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  
  const sortedAndFilteredEvents = useMemo(() => {
    let sortableItems = [...events].filter(event => 
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'date') {
          const dateA = parseEventDate(a.meetupTime || a.date);
          const dateB = parseEventDate(b.meetupTime || b.date);
          if (dateA && dateB) {
            if (dateA < dateB) return sortConfig.direction === 'asc' ? -1 : 1;
            if (dateA > dateB) return sortConfig.direction === 'asc' ? 1 : -1;
          }
          return 0;
        } else {
           if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'asc' ? 1 : -1;
          }
        }
        return 0;
      });
    }

    return sortableItems;
  }, [events, searchQuery, sortConfig]);

  const getSortIndicator = (key: SortKey) => {
    if (sortConfig?.key !== key) return null;
    return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
  };

  return (
    <>
        <div className="flex items-center justify-between mb-8 gap-4">
        <h1 className="text-3xl font-headline">Manage Events</h1>
        <div className="flex gap-2">
            <Button onClick={() => handleSync(false)} disabled={isSyncing} variant="outline">
            {isSyncing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Sync with TruckersMP
            </Button>
            <AddEventByIdDialog />
            <Button asChild>
            <Link href="/admin/events/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New
            </Link>
            </Button>
        </div>
        </div>

        <Card>
        <CardHeader>
            <CardTitle>All Events</CardTitle>
             <div className="relative mt-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search for an event..."
                    className="w-full rounded-lg bg-background pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button variant="ghost" onClick={() => requestSort('title')}>
                      Title
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" onClick={() => requestSort('date')}>
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                     <Button variant="ghost" onClick={() => requestSort('type')}>
                      Type
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortedAndFilteredEvents.map((event) => (
                <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.title}</TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>
                    <Badge variant={event.type === 'internal' ? 'default' : 'secondary'} className="capitalize">
                        {event.type}
                    </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <EventRowActions event={event} />
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>
        </Card>
    </>
  );
}
