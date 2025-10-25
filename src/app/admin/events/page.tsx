
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/app/footer";
import { getEvents } from "./actions";
import { EventsClient } from "./events-client";
import type { Event } from "@/lib/events";


export default async function EventsAdminPage() {
  const events: Event[] = await getEvents();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <EventsClient events={events} />
          
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
                <Link href="/admin">Back to Admin</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
