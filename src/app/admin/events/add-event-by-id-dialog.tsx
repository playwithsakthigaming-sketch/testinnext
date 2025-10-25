
'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { addEventFromTruckersMPUrl } from './actions';
import { ListPlus, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function AddEventByIdDialog() {
  const [open, setOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [eventUrl, setEventUrl] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleAdd = async () => {
    if (!eventUrl) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a TruckersMP event URL.',
      });
      return;
    }
    
    setIsAdding(true);
    const result = await addEventFromTruckersMPUrl(eventUrl);
    setIsAdding(false);

    if (result.success) {
      toast({
        title: 'Success',
        description: result.message,
      });
      setOpen(false);
      setEventUrl('');
      router.refresh();
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.message || 'An error occurred.',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <ListPlus className="mr-2 h-4 w-4" />
          Add from URL
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Event from TruckersMP URL</DialogTitle>
          <DialogDescription>
            Enter the full TruckersMP event URL to automatically create the event.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="event-url" className="text-right">
                Event URL
            </Label>
            <Input
                id="event-url"
                value={eventUrl}
                onChange={(e) => setEventUrl(e.target.value)}
                className="col-span-3"
                placeholder="https://truckersmp.com/events/..."
            />
            </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleAdd} disabled={isAdding}>
            {isAdding ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Add Event"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
