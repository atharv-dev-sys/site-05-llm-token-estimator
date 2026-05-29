
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Cpu, BookOpen, Info, Phone, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import { AdPlaceholder } from "@/components/ad-placeholder";

const navItems = [
  { href: "/", label: "VRAM Estimator", icon: <Cpu className="h-5 w-5" /> },
  { href: "/articles", label: "Knowledge Base", icon: <BookOpen className="h-5 w-5" /> },
  { href: "/about", label: "Our Mission", icon: <Info className="h-5 w-5" /> },
  { href: "/contact", label: "Technical Support", icon: <Phone className="h-5 w-5" /> },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode, className?: string }) => {
    const isActive = pathname === href;
    return (
      <Link href={href} passHref>
        <span
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive ? "text-primary font-semibold border-b-2 border-primary pb-1" : "text-foreground/80",
            className
          )}
        >
          {children}
        </span>
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, children, icon, onNavigate }: { href: string; children: React.ReactNode; icon: React.ReactNode; onNavigate: () => void; }) => {
    const isActive = pathname === href;
    return (
      <SheetClose asChild>
        <Link href={href} passHref>
          <span
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-secondary hover:text-primary",
              isActive ? "bg-secondary text-primary" : "text-foreground"
            )}
          >
            {icon}
            {children}
          </span>
        </Link>
      </SheetClose>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="TokenCalc Home">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-xl tracking-tight text-primary">TokenCalc</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="hidden md:block ml-5">
           <AdPlaceholder variant="small" height="40px" width="100px" label="Ad" className="p-0" />
        </div>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs p-6 bg-background">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" aria-label="TokenCalc Home" onClick={() => setIsMobileMenuOpen(false)}>
                   <Cpu className="h-6 w-6 text-primary" />
                   <span className="font-headline font-bold text-xl tracking-tight text-primary">TokenCalc</span>
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                   <MobileNavLink key={item.href} href={item.href} icon={item.icon} onNavigate={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </MobileNavLink>
                ))}
                 <div className="mt-4 pt-4 border-t border-border/40">
                    <AdPlaceholder variant="small" height="50px" width="100%" label="Ad" className="mx-auto" />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
