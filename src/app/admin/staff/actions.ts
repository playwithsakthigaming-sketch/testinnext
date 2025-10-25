
'use server';

import fs from 'fs/promises';
import path from 'path';
import { revalidatePath } from 'next/cache';
import type { StaffData, StaffMember } from '@/lib/staff-members';

const staffFilePath = path.join(process.cwd(), 'src', 'lib', 'staff-members.json');
const VTC_ID = '73933';

async function readJsonFile<T>(filePath: string): Promise<T> {
    try {
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            return { staffMembers: [] } as any;
        }
        throw error;
    }
}

async function writeJsonFile(filePath: string, data: any): Promise<void> {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

export async function deleteStaffMember(memberId: string) {
    try {
        const staffData = await readJsonFile<StaffData>(staffFilePath);

        const memberExists = staffData.staffMembers.some(member => member.id === memberId);
        if (!memberExists) {
            return { success: false, message: 'Staff member not found.' };
        }

        staffData.staffMembers = staffData.staffMembers.filter(member => member.id !== memberId);

        await writeJsonFile(staffFilePath, staffData);

        revalidatePath('/admin/staff');
        revalidatePath('/staff'); 

        return { success: true, message: 'Staff member deleted successfully.' };
    } catch (error) {
        console.error('Error deleting staff member:', error);
        return { success: false, message: 'Failed to delete staff member.' };
    }
}


type TruckersMPMember = {
    user_id: number;
    username: string;
    role: string;
};

type TruckersMPVTC = {
    members: TruckersMPMember[];
}

export async function syncStaffFromTruckersMP() {
  try {
    const res = await fetch(`https://api.truckersmp.com/v2/vtc/${VTC_ID}/members`);
    if (!res.ok) {
        throw new Error(`Failed to fetch members from TruckersMP. Status: ${res.status}`);
    }

    const tmpData = await res.json();
    const tmpMembers = tmpData.response.members as TruckersMPMember[];

    if (!tmpMembers) {
        return { success: false, message: "Could not find members data in TruckersMP response.", added: 0, updated: 0, removed: 0 };
    }

    const newStaffMembers: StaffMember[] = tmpMembers.map(tmpMember => ({
        id: `staff-${tmpMember.user_id}`,
        name: tmpMember.username,
        role: tmpMember.role,
        imageId: 'testimonial-avatar',
        imageUrl: "https://media.discordapp.net/attachments/1116720480544636999/1274425873201631304/TP_NEW_WB_PNGxxxhdpi.png?ex=68d4d8d5&is=68d38755&hm=b6d4e0e4ef2c3215a4de4fb2f592189a60ddd94c651f96fe04deac2e7f96ddc6&=&format=webp&quality=lossless&width=826&height=826",
        truckersmpUrl: `https://truckersmp.com/user/${tmpMember.user_id}`
    }));

    const oldStaffData = await readJsonFile<StaffData>(staffFilePath);
    const oldStaffCount = oldStaffData.staffMembers.length;
    
    const newStaffData: StaffData = {
        staffMembers: newStaffMembers
    };
    
    await writeJsonFile(staffFilePath, newStaffData);

    revalidatePath('/admin/staff');
    revalidatePath('/staff');

    const newStaffCount = newStaffMembers.length;
    const addedCount = Math.max(0, newStaffCount - oldStaffCount);
    const removedCount = Math.max(0, oldStaffCount - newStaffCount);
    
    return { success: true, message: `Sync complete. Added ${addedCount}, removed ${removedCount}. Total members: ${newStaffCount}.`, added: addedCount, updated: 0, removed: removedCount };

  } catch (error) {
    console.error('Error syncing staff from TruckersMP:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
    return { success: false, message: errorMessage, added: 0, updated: 0, removed: 0 };
  }
}
