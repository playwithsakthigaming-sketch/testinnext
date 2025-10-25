
'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { Application, ApplicationsData } from '@/lib/applications';
import { Header } from '@/components/app/header';
import { Footer } from '@/components/app/footer';

export default function ApplicationStatusPage() {
    const [email, setEmail] = useState('');
    const [application, setApplication] = useState<Application | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setApplication(null);
        try {
            const res = await fetch('/api/get-application-status?email=' + email);
            if (res.ok) {
                const data = await res.json();
                setApplication(data.application);
            } else {
                const errorData = await res.json();
                setError(errorData.message || 'Application not found.');
            }
        } catch (err) {
            setError('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const getStatusInfo = (status: Application['status']) => {
        switch (status) {
            case 'Accepted':
                return {
                    icon: <CheckCircle className="h-16 w-16 text-green-500" />,
                    message: 'Congratulations! Your application has been accepted.',
                    description: 'You should receive an email with further instructions. You can now log in to the Driver Hub.',
                };
            case 'Rejected':
                return {
                    icon: <XCircle className="h-16 w-16 text-red-500" />,
                    message: 'Your application has been reviewed.',
                    description: 'Unfortunately, we are unable to proceed with your application at this time. Thank you for your interest.',
                };
            case 'Pending':
            default:
                return {
                    icon: <Clock className="h-16 w-16 text-yellow-500" />,
                    message: 'Your application is pending review.',
                    description: 'Our team is currently reviewing your application. Please check back later for an update.',
                };
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow flex items-center justify-center p-4">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Check Application Status</CardTitle>
                        <CardDescription>Enter the email you used to apply to see your current status.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSearch} className="space-y-4">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Search
                            </Button>
                        </form>
                        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                        {application && (
                             <div className="mt-8 text-center flex flex-col items-center gap-4">
                                {getStatusInfo(application.status).icon}
                                <h3 className="text-2xl font-bold">{getStatusInfo(application.status).message}</h3>
                                <p className="text-muted-foreground">{getStatusInfo(application.status).description}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
