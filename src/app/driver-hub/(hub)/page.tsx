
import { getDashboardData } from '@/app/driver-hub/(hub)/actions';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { Event } from '@/lib/events';
import eventsData from '@/lib/events.json';
import { DashboardClientPage } from '@/app/driver-hub/(hub)/dashboard-client';
import { parseEventDate } from '@/lib/date-utils';
import { getProfileData } from '../profile/actions';
import type { UserProfile } from '../profile/actions';

const getNearestPartnerEvent = (): (Event & { image: any }) | null => {
    const now = new Date();
    const partnerEvents = eventsData.events
        .filter(e => e.type === 'partner')
        .map(e => ({...e, parsedDate: parseEventDate(e.meetupTime || e.date)}))
        .filter(e => e.parsedDate && e.parsedDate > now)
        .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime());
    
    if (partnerEvents.length === 0) return null;

    const nearestEvent = partnerEvents[0];
    const image = PlaceHolderImages.find(p => p.id === nearestEvent.imageId);
    
    return { ...nearestEvent, image };
};


export default async function DashboardPage() {
    const dashboardData = await getDashboardData();
    const nearestPartnerEvent = getNearestPartnerEvent();
    const userProfile = await getProfileData("lsk27102@gmail.com");

    return (
        <DashboardClientPage 
            initialDashboardData={dashboardData} 
            initialNearestPartnerEvent={nearestPartnerEvent}
            initialUserProfile={userProfile}
        />
    );
}
