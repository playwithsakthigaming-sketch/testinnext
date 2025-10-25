
import Link from 'next/link';
import { Logo } from '@/components/app/logo';
import { Button } from '@/components/ui/button';
import { CurrentYear } from './current-year';

export function Footer() {
  return (
    <footer className="py-12 bg-black text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo size={64} />
              <span className="text-lg font-headline animate-rgb-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent [background-size:200%_auto]">Tamil Pasanga</span>
            </Link>
            <p className="text-sm">Gateway to New Horizons.</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/events" className="hover:text-primary transition-colors">Events</Link></li>
               <li><Link href="/login" className="hover:text-primary transition-colors">Driver Hub</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">News</Link></li>
              <li><Link href="/admin" className="hover:text-primary transition-colors">Admin</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://discord.com/invite/paRCYhJphH" target="_blank" className="hover:text-primary transition-colors">Discord</Link></li>
              <li><Link href="https://truckersmp.com/vtc/73933" target="_blank" className="hover:text-primary transition-colors">TruckersMP</Link></li>
              <li><Link href="https://docs.truckershub.in/" target="_blank" className="hover:text-primary transition-colors">TruckersHub Docs</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1 space-y-4">
            
            <Button asChild className="w-full rounded-full" >
                <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm">
          <p>&copy; <CurrentYear /> Tamil Pasanga. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
