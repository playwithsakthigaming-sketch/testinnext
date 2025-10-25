
'use server';

import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { ApplicationsData, Application } from '@/lib/applications';

const applicationsFilePath = path.join(process.cwd(), 'src', 'lib', 'applications.json');

const applicationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  steamId: z.string().min(1, 'A valid Steam ID is required'),
  truckersmpUrl: z.string().url('A valid TruckersMP URL is required'),
  truckershubId: z.string().min(1, 'A valid TruckersHub ID is required'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

async function readApplications(): Promise<ApplicationsData> {
    try {
        const data = await fs.readFile(applicationsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return { applications: [] };
        }
        throw error;
    }
}

async function writeApplications(data: ApplicationsData): Promise<void> {
    await fs.writeFile(applicationsFilePath, JSON.stringify(data, null, 2));
}

async function sendNewApplicationWebhook(application: Application) {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
        console.error('DISCORD_WEBHOOK_URL is not set.');
        return;
    }

    const embed = {
        title: 'New Driver Application Received',
        description: `A new application from **${application.name}** is ready for review.`,
        color: 3447003, // Blue
        fields: [
            { name: 'Applicant Name', value: application.name, inline: true },
            { name: 'Applicant Email', value: application.email, inline: true },
            { name: 'Status', value: 'Pending', inline: true },
            { name: 'Steam Profile', value: `[View](https://steamcommunity.com/id/${application.steamId})`, inline: true },
            { name: 'TruckersMP', value: `[View](${application.truckersmpUrl})`, inline: true },
            { name: 'TruckersHub', value: `[View](https://truckershub.in/profile/${application.truckershubId})`, inline: true },
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: 'Tamil Pasanga VTC | New Application',
        },
    };
    
    const payload = {
        content: `Attention @here, new application from **${application.name}**. Please go to the admin panel to review.`,
        embeds: [embed],
         components: [
            {
                type: 1, // Action Row
                components: [
                    { type: 2, style: 2, label: 'Accept', custom_id: `accept_${application.id}` },
                    { type: 2, style: 4, label: 'Reject', custom_id: `reject_${application.id}` },
                ],
            },
        ],
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(`Discord webhook failed with status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error sending new application webhook:', error);
    }
}

export async function submitApplication(values: ApplicationFormValues): Promise<{ success: boolean; message: string }> {
  const validation = applicationSchema.safeParse(values);
  if (!validation.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  
  const { email } = validation.data;

  try {
    const applicationsData = await readApplications();
    
    const existingApplication = applicationsData.applications.find(
      app => app.email.toLowerCase() === email.toLowerCase()
    );

    if (existingApplication) {
      return { success: false, message: 'An application with this email already exists.' };
    }

    const newApplication: Application = {
      id: `app-${Date.now()}`,
      ...validation.data,
      status: 'Pending',
      submittedAt: new Date().toISOString(),
    };

    applicationsData.applications.unshift(newApplication);
    await writeApplications(applicationsData);
    
    await sendNewApplicationWebhook(newApplication);

    revalidatePath('/admin/applications');

    return { success: true, message: 'Application submitted successfully!' };

  } catch (error) {
    console.error('Error submitting application:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
