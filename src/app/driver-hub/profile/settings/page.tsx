
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, KeyRound, User, Image as ImageIcon } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProfileData, type UserProfile } from '@/app/driver-hub/profile/actions';
import { updatePassword, updateAvatar } from './actions';


const passwordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
  message: "New passwords don't match",
  path: ['confirmPassword']
});

type PasswordFormData = z.infer<typeof passwordSchema>;

export default function SettingsPage() {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isPasswordSubmitting, setIsPasswordSubmitting] = useState(false);
    const [isAvatarSubmitting, setIsAvatarSubmitting] = useState(false);

    const { toast } = useToast();

    const passwordForm = useForm<PasswordFormData>({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        }
    });

    useEffect(() => {
        async function fetchProfile() {
            setIsLoading(true);
            try {
                // This is a placeholder. In a real app, you'd get the logged-in user's email.
                const userEmail = "lsk27102@gmail.com"; 
                const profileData = await getProfileData(userEmail);
                if (profileData) {
                    setUser(profileData);
                }
            } catch (error) {
                console.error(error);
                toast({ variant: 'destructive', title: 'Error', description: 'Failed to load user profile.' });
            } finally {
                setIsLoading(false);
            }
        }
        fetchProfile();
    }, [toast]);

    async function onPasswordSubmit(data: PasswordFormData) {
        if (!user) return;
        setIsPasswordSubmitting(true);
        const result = await updatePassword(user.id, data.currentPassword, data.newPassword);
        if (result.success) {
            toast({ title: 'Success', description: 'Your password has been updated.' });
            passwordForm.reset();
        } else {
            toast({ variant: 'destructive', title: 'Error', description: result.message });
        }
        setIsPasswordSubmitting(false);
    }

    async function onAvatarSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!user) return;

        const formData = new FormData(event.currentTarget);
        const newAvatarUrl = formData.get('avatarUrl') as string;

        if (!newAvatarUrl) {
            toast({ variant: 'destructive', title: 'Error', description: 'Please provide an image URL.' });
            return;
        }

        setIsAvatarSubmitting(true);
        const result = await updateAvatar(user.id, newAvatarUrl);
        if (result.success) {
            toast({ title: 'Success', description: 'Your avatar has been updated.' });
            // Re-fetch user to show new avatar
            const profileData = await getProfileData(user.email);
            if (profileData) setUser(profileData);
        } else {
            toast({ variant: 'destructive', title: 'Error', description: result.message });
        }
        setIsAvatarSubmitting(false);
    }
    
     if (isLoading) {
        return (
            <div className="p-4 md:p-8 flex items-center justify-center h-[calc(100vh_-_8rem)]">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </div>
        );
    }
    
    if (!user) {
        return <div className="p-4 md:p-8 text-center">Failed to load settings. Please try again later.</div>
    }

    return (
        <div className="p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="profile"><User className="mr-2 h-4 w-4"/>Profile</TabsTrigger>
                    <TabsTrigger value="security"><KeyRound className="mr-2 h-4 w-4"/>Security</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Profile Settings</CardTitle>
                            <CardDescription>Manage your public profile information.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <form onSubmit={onAvatarSubmit} className="space-y-6">
                                <div className="flex items-center gap-6">
                                    <Avatar className="h-24 w-24">
                                        <AvatarImage src={user.avatar} alt={user.name}/>
                                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-grow space-y-2">
                                        <Label htmlFor="avatarUrl">Avatar Image URL</Label>
                                        <Input id="avatarUrl" name="avatarUrl" placeholder="https://example.com/new-avatar.png" />
                                    </div>
                                </div>
                                 <div className="flex justify-end gap-2">
                                    <Button type="submit" disabled={isAvatarSubmitting}>
                                        {isAvatarSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : <ImageIcon className="mr-2 h-4 w-4" />}
                                        Update Avatar
                                    </Button>
                                </div>
                             </form>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="security">
                     <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                            <CardDescription>Update your account password here.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...passwordForm}>
                                <form onSubmit={passwordForm.handleSubmit(onPasswordSubmit)} className="space-y-4 max-w-md">
                                    <FormField
                                        control={passwordForm.control}
                                        name="currentPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Current Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={passwordForm.control}
                                        name="newPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>New Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                     <FormField
                                        control={passwordForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm New Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" disabled={isPasswordSubmitting}>
                                        {isPasswordSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        Change Password
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
