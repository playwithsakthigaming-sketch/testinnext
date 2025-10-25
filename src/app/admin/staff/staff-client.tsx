
'use client';

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, MoreHorizontal, FilePenLine, RefreshCw, Loader2 } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { DeleteStaffDialog } from "./delete-staff-dialog";
import { syncStaffFromTruckersMP } from './actions';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import type { StaffMember } from "@/lib/staff-members";

export function StaffClient({ staff }: { staff: StaffMember[] }) {
  const [isSyncing, setIsSyncing] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const handleSync = async (isAutoSync = false) => {
    if (!isAutoSync) setIsSyncing(true);
    const result = await syncStaffFromTruckersMP();
    if (!isAutoSync) setIsSyncing(false);

    if (result.success) {
      if (!isAutoSync || result.added > 0 || result.updated > 0 || result.removed > 0) {
        toast({
          title: "Sync Complete",
          description: result.message,
        });
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
    const intervalId = setInterval(() => handleSync(true), 30000); // Auto-refresh every 30 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-headline">Manage Staff Members</h1>
        <div className="flex gap-2">
            <Button onClick={() => handleSync(false)} disabled={isSyncing} variant="outline">
            {isSyncing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
                <RefreshCw className="mr-2 h-4 w-4" />
            )}
            Sync with TruckersMP
            </Button>
            <Button asChild>
              <Link href="/admin/staff/create">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New
              </Link>
            </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Staff</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {staff.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/admin/staff/edit/${member.id}`}>
                            <FilePenLine className="mr-2 h-4 w-4" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DeleteStaffDialog memberId={member.id} />
                      </DropdownMenuContent>
                    </DropdownMenu>
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
