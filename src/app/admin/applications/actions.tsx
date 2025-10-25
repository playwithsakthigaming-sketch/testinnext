
'use client';

import { useTransition } from 'react';
import { updateApplicationStatus as updateStatusAction, updateBookingStatus as updateBookingAction } from '@/app/admin/applications/server-actions';
import type { ApplicationStatus } from '@/lib/applications';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { CheckCircle, XCircle, Loader2, PauseCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const statusConfig = {
    Accepted: { icon: <CheckCircle className="mr-2 h-4 w-4" />, label: 'Accept', className: 'text-green-500' },
    Rejected: { icon: <XCircle className="mr-2 h-4 w-4" />, label: 'Reject', className: 'text-red-500' },
    Pending: { icon: <div/>, label: 'Pending', className: ''}
};


export function UpdateApplicationStatus({
  applicationId,
  status,
  currentStatus,
}: {
  applicationId: string;
  status: ApplicationStatus;
  currentStatus: ApplicationStatus;
}) {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const config = statusConfig[status];

  const handleUpdate = () => {
    startTransition(async () => {
      const result = await updateStatusAction(applicationId, status, 'Trainee');
      if (result.success) {
        toast({ title: 'Success', description: 'Application status updated.' });
      } else {
        toast({ variant: 'destructive', title: 'Error', description: result.message });
      }
    });
  };
  
  const isDisabled = isPending || currentStatus === status;

  return (
    <DropdownMenuItem
      onClick={() => handleUpdate()}
      disabled={isDisabled}
      className={config.className}
      onSelect={(e) => e.preventDefault()}
    >
      {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : config.icon}
      {config.label}
    </DropdownMenuItem>
  );
}

export function UpdateBookingStatus({
    eventId,
    areaId,
    bookingId,
    newStatus,
}: {
    eventId: string;
    areaId: string;
    bookingId: string;
    newStatus: 'approved' | 'rejected' | 'hold';
}) {
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    
    let icon, label, className;

    switch (newStatus) {
        case 'approved':
            icon = <CheckCircle className="mr-2 h-4 w-4 text-green-500" />;
            label = 'Approve';
            className = 'text-green-500';
            break;
        case 'rejected':
            icon = <XCircle className="mr-2 h-4 w-4 text-red-500" />;
            label = 'Reject';
            className = 'text-red-500';
            break;
        case 'hold':
            icon = <PauseCircle className="mr-2 h-4 w-4 text-yellow-500" />;
            label = 'Put on Hold';
            className = 'text-yellow-500';
            break;
    }


    const handleUpdate = () => {
        startTransition(async () => {
            const result = await updateBookingAction(eventId, areaId, bookingId, newStatus);
            if (result.success) {
                toast({ title: 'Success', description: result.message });
            } else {
                toast({ variant: 'destructive', title: 'Error', description: result.message });
            }
        });
    };

    return (
        <DropdownMenuItem
            onClick={handleUpdate}
            disabled={isPending}
            className={className}
            onSelect={(e) => e.preventDefault()}
        >
            {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : icon}
            {label}
        </DropdownMenuItem>
    );
}
