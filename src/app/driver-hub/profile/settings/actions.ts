
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { ApplicationsData, Application } from '@/lib/applications';

const applicationsFilePath = path.join(process.cwd(), 'src', 'lib', 'applications.json');

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

export async function updatePassword(
    applicationId: string,
    currentPassword: string,
    newPassword: string
): Promise<{ success: boolean; message: string }> {
    try {
        const applicationsData = await readApplications();
        const appIndex = applicationsData.applications.findIndex(app => app.id === applicationId);

        if (appIndex === -1) {
            return { success: false, message: 'User application not found.' };
        }
        
        const application = applicationsData.applications[appIndex];

        if (application.password !== currentPassword) {
            return { success: false, message: 'Incorrect current password.' };
        }

        applicationsData.applications[appIndex].password = newPassword;
        
        await writeApplications(applicationsData);
        
        revalidatePath(`/driver-hub/profile/settings`);

        return { success: true, message: 'Password updated successfully.' };
    } catch (error) {
        console.error('Error updating password:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}


export async function updateAvatar(
    applicationId: string,
    newAvatarUrl: string
): Promise<{ success: boolean; message: string }> {
     try {
        const applicationsData = await readApplications();
        const appIndex = applicationsData.applications.findIndex(app => app.id === applicationId);

        if (appIndex === -1) {
            return { success: false, message: 'User application not found.' };
        }

        applicationsData.applications[appIndex].avatar = newAvatarUrl;

        await writeApplications(applicationsData);

        revalidatePath(`/driver-hub/profile`);
        revalidatePath(`/driver-hub/profile/settings`);

        return { success: true, message: 'Avatar updated successfully.' };
    } catch (error) {
        console.error('Error updating avatar:', error);
        return { success: false, message: 'An unexpected error occurred.' };
    }
}
