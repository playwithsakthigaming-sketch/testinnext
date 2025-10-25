
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
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

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
        return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    try {
        const applicationsData = await readApplications();
        const application = applicationsData.applications.find(
            app => app.email.toLowerCase() === email.toLowerCase()
        );

        if (application) {
            return NextResponse.json({ application });
        } else {
            return NextResponse.json({ message: 'Application not found with this email.' }, { status: 404 });
        }
    } catch (error) {
        console.error('Error fetching application status:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
