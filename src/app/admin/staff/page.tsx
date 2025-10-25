
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Footer } from "@/components/app/footer";
import { StaffClient } from "./staff-client";
import { promises as fs } from 'fs';
import path from 'path';
import type { StaffData, StaffMember } from '@/lib/staff-members';

async function getStaff(): Promise<StaffMember[]> {
    const staffFilePath = path.join(process.cwd(), 'src', 'lib', 'staff-members.json');
    try {
        const fileContent = await fs.readFile(staffFilePath, 'utf-8');
        const data: StaffData = JSON.parse(fileContent);
        return data.staffMembers.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
        console.error("Could not read staff-members.json", error);
        return [];
    }
}

export default async function StaffAdminPage() {
  const staff = await getStaff();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <StaffClient staff={staff} />
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
