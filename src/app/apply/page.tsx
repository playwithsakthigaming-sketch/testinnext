
import { Header } from '@/components/app/header';
import { Footer } from '@/components/app/footer';
import { ApplicationForm } from './application-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const bannerImageUrl = "https://cdn.discordapp.com/attachments/1281551151418048677/1417739857123475538/1758085736934.jpg?ex=68eddab2&is=68ec8932&hm=9b7754d9c7921a97e419b45e7f14b62e49c71e2be35c24a29a0c7c0062b8014e&=&format=webp&width=1194&height=722";


export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
         <div className="relative h-64 w-full">
            <Image
                src={bannerImageUrl}
                alt="Application Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h1 className="text-4xl font-headline text-white">Join Our Crew</h1>
            </div>
        </div>
        <div className="container mx-auto max-w-4xl p-4 md:p-8 -mt-16">
            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-headline">VTC Application</CardTitle>
                </CardHeader>
                <CardContent>
                    <ApplicationForm />
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
