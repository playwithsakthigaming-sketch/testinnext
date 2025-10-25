
import { z } from 'zod';

// Helper to parse the date/time string from events.json
export const parseEventDate = (dateTimeStr: string): Date | null => {
    if (!dateTimeStr) return null;
    
    if (dateTimeStr.includes(' | ')) {
        const parts = dateTimeStr.split(' | ');
        const datePart = parts[0];
        const timePart = parts[1];

        const dateMatch = datePart.match(/(\d{2})\.(\d{2})\.(\d{4})/);
        if (!dateMatch) return null;
        const [, day, month, year] = dateMatch.map(Number);

        const timeMatch = timePart.match(/(\d{2}):(\d{2})/);
        if (!timeMatch) return null;
        const [hour, minute] = timeMatch.slice(1).map(Number);
        
        if (isNaN(day) || isNaN(month) || isNaN(year) || isNaN(hour) || isNaN(minute)) {
        return null;
        }
        
        return new Date(Date.UTC(year, month - 1, day, hour, minute));
    }
    
    // Fallback for ISO string or other parsable formats
    try {
        const date = new Date(dateTimeStr);
        if (!isNaN(date.getTime())) {
            return date;
        }
    } catch (e) {
        return null;
    }

    return null;
};


const timeSchema = z.object({
  hour: z.string(),
  minute: z.string(),
  timezone: z.string(),
});

export const parseDateTimeString = (dateTimeStr: string): { date: Date, time: z.infer<typeof timeSchema> } => {
    const defaultTime = { hour: '13', minute: '00', timezone: 'UTC' };

    if (!dateTimeStr) {
        return { date: new Date(), time: defaultTime };
    }

    const date = parseEventDate(dateTimeStr);

    if (date && !isNaN(date.getTime())) {
         const hour = String(date.getUTCHours()).padStart(2, '0');
         const minute = String(date.getUTCMinutes()).padStart(2, '0');
         
         const timePartMatch = dateTimeStr.match(/\d{2}:\d{2}\s?(\w+)?/);
         const timezone = timePartMatch?.[1] || 'UTC';

         return {
             date: new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()),
             time: { hour, minute, timezone }
         };
    }
    
    return {
        date: new Date(),
        time: defaultTime
    };
}


// Helper to format date and time from an ISO string
export const formatDateTimeFromISO = (isoString: string): string => {
    if (!isoString || isoString.includes('NaN')) {
      return 'TBD';
    }
    try {
        const date = new Date(isoString);
        if (isNaN(date.getTime())) {
            return 'TBD';
        }
        const day = String(date.getUTCDate()).padStart(2, '0');
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const year = date.getUTCFullYear();
        const hour = String(date.getUTCHours()).padStart(2, '0');
        const minute = String(date.getUTCMinutes()).padStart(2, '0');
        return `${day}.${month}.${year} | ${hour}:${minute} UTC`;
    } catch (e) {
        return 'TBD';
    }
};
