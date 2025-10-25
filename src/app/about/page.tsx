import { Header } from '@/components/app/header';
import { Footer } from '@/components/app/footer';
import { About } from '@/components/app/about';
import { Achievements } from '@/components/app/achievements';
import { getAchievementsData } from './actions';

export default async function AboutPage() {
  const achievementsData = await getAchievementsData();
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <About />
        <Achievements 
          totalDrivers={achievementsData.totalDrivers}
          completedEvents={achievementsData.completedEvents}
        />
      </main>
      <Footer />
    </div>
  );
}
