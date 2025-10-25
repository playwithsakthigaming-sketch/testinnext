
import { Header } from '@/components/app/header';
import { Hero } from '@/components/app/hero';
import { ApplicationSteps } from '@/components/app/application-steps';
import { Testimonial } from '@/components/app/testimonial';
import { Footer } from '@/components/app/footer';
import { CoreValues } from '@/components/app/core-values';
import { UpcomingEvents } from '@/components/app/upcoming-events';
import { getEvents } from '@/app/events/actions';


export default async function Home() {
  const initialEvents = await getEvents();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CoreValues />
        <ApplicationSteps />
        <Testimonial />
        <UpcomingEvents initialEvents={initialEvents} />
      </main>
      <Footer />
    </div>
  );
}
