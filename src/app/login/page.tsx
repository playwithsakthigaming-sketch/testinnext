
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/app/logo";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { loginAction } from "./actions";
import { loginSchema, type LoginFormData } from "@/lib/schemas";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2">
        <path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.19,4.73C14.03,4.73 15.6,5.33 16.59,6.23L18.83,4.03C17.02,2.36 14.71,1.44 12.19,1.44C7.03,1.44 3,5.96 3,12C3,18.04 7.03,22.56 12.19,22.56C17.6,22.56 21.74,18.33 21.74,12.33C21.74,11.85 21.6,11.45 21.48,11.1H21.35Z" />
    </svg>
);

const DiscordIcon = () => (
    <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2">
        <path fill="currentColor" d="M20.317 4.36981C18.7915 3.72551 17.1857 3.28682 15.5292 3.09602C15.4239 3.36442 15.2891 3.72551 15.1838 3.99391C13.2435 3.63282 11.3159 3.63282 9.3883 3.99391C9.2702 3.72551 9.1355 3.36442 9.0302 3.09602C7.37371 3.28682 5.76792 3.72551 4.24243 4.36981C1.6917 8.16112 1.03961 11.898 1.9427 15.5422C3.73711 16.9832 5.56092 17.9351 7.42433 18.5794C7.79523 18.2183 8.13672 17.8315 8.44882 17.4191C8.01422 17.1801 7.59242 16.9283 7.18342 16.66C7.03851 16.5413 6.89361 16.4226 6.74871 16.2911C6.71931 16.2655 6.67711 16.2399 6.64771 16.2142C6.64771 16.2142 6.63501 16.2014 6.62221 16.1887C8.42931 17.3015 10.3862 17.9057 12.4173 17.9057C14.4483 17.9057 16.4052 17.3015 18.2124 16.1887C18.2007 16.2004 18.188 16.2142 18.188 16.2142C18.1586 16.2399 18.1164 16.2655 18.087 16.2911C17.9421 16.4226 17.7972 16.5413 17.6523 16.66C17.2433 16.9283 16.8215 17.1801 16.3869 17.4191C16.7118 17.8315 17.0405 18.2183 17.4114 18.5794C19.2748 17.9351 21.0986 16.9832 22.893 15.5422C23.8357 11.4593 23.0118 7.74971 20.317 4.36981ZM9.68069 13.848C8.68989 13.848 7.88939 12.9158 7.88939 11.783C7.88939 10.6502 8.67709 9.718 9.68069 9.718C10.6843 9.718 11.4848 10.6502 11.472 11.783C11.472 12.9158 10.6843 13.848 9.68069 13.848ZM14.8517 13.848C13.8609 13.848 13.0604 12.9158 13.0604 11.783C13.0604 10.6502 13.8481 9.718 14.8517 9.718C15.8553 9.718 16.6558 10.6502 16.643 11.783C16.643 12.9158 15.8553 13.848 14.8517 13.848Z" />
    </svg>
);


export default function DriverHubLoginPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();
    const router = useRouter();

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginFormData) {
        setIsSubmitting(true);
        const result = await loginAction(values);
        setIsSubmitting(false);

        if (result.success) {
            toast({
                title: "Login Successful",
                description: "Welcome to the Driver Hub!",
            });
            router.push("/driver-hub");
        } else {
            toast({
                variant: "destructive",
                title: "Login Failed",
                description: result.message,
            });
        }
    }

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-background">
            <Image 
                src="https://media.discordapp.net/attachments/1281551151418048677/1417735782223056929/IMG_20250917_102508.jpg?ex=68edd7d6&is=68ec8656&hm=80a11804ded1c00d78e714972cbd6223a670437744541bfe3e49986c0175175b&=&format=webp&width=1194&height=722"
                alt="Background of green trucks"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <Card className="relative z-10 w-full max-w-md mx-4 bg-card/90 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                        <Logo size={64}/>
                    </div>
                    <CardTitle className="text-2xl font-headline">Driver Hub Login</CardTitle>
                    <CardDescription>Welcome back, driver. Please log in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                             <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email or Profile URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email or profile URL" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel>Password</FormLabel>
                                            <Button variant="link" asChild className="text-primary p-0 h-auto text-xs">
                                                <Link href="/driver-hub/forgot-password">Forgot Password?</Link>
                                            </Button>
                                        </div>
                                        <FormControl>
                                            <Input type="password" placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember-me" />
                                <Label htmlFor="remember-me" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Remember Me
                                </Label>
                            </div>

                            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                                {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Login
                            </Button>
                        </form>
                    </Form>
                    <div className="relative mt-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        <Button variant="outline" className="bg-white text-black hover:bg-white/90">
                           <GoogleIcon /> Google
                        </Button>
                        <Button variant="outline" className="bg-[#5865F2] text-white hover:bg-[#5865F2]/90">
                            <DiscordIcon /> Discord
                        </Button>
                    </div>

                    
                </CardContent>
            </Card>
        </div>
    );
}
