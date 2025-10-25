
'use client';

import Link from 'next/link';
import { Logo } from '@/components/app/logo';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, Truck } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/events', label: 'Events' },
  { href: '/staff', label: 'Staff' },
  { href: '/gallery', label: 'Gallery' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 w-full absolute top-0 z-20 bg-gradient-to-b from-black/70 to-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Logo size={48} />
          <span className="text-xl font-headline text-white">Tamil Pasanga</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white">
          {navLinks.slice(0, 1).map((link) => (
             <Link
              key={link.href + link.label}
              href={link.href}
              className={cn("hover:text-primary transition-colors", pathname === link.href && "text-primary underline underline-offset-4")}
            >
              {link.label}
            </Link>
          ))}
          
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className={cn("hover:text-primary transition-colors", pathname === link.href && "text-primary underline underline-offset-4")}
            >
              {link.label}
            </Link>
          ))}
            <Button asChild size="sm" className="rounded-full">
                <Link href="/login">
                    <Truck className="mr-2 h-4 w-4" />
                    Driver Hub
                </Link>
            </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background text-white">
              <SheetHeader className="p-6">
                <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-6 pt-0">
                <Link href="/" className="flex items-center gap-2">
                  <Logo size={48} />
                  <span className="text-xl font-headline">Tamil Pasanga</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg">
                   {navLinks.slice(0,1).map((link) => (
                     <Link
                      key={link.href + link.label}
                      href={link.href}
                      className={cn("hover:text-primary transition-colors", pathname === link.href && "text-primary underline underline-offset-4")}
                    >
                      {link.label}
                    </Link>
                   ))}
                  
                  {navLinks.slice(1).map((link) => (
                    <Link
                      key={link.href + link.label}
                      href={link.href}
                      className={cn("hover:text-primary transition-colors", pathname === link.href && "text-primary underline underline-offset-4")}
                    >
                      {link.label}
                    </Link>
                  ))}
                   <Button asChild size="sm" className="rounded-full mt-4">
                        <Link href="/login">
                            <Truck className="mr-2 h-4 w-4" />
                            Driver Hub
                        </Link>
                    </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
