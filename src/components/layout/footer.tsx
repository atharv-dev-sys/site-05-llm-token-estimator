
import Link from 'next/link';
import { Mail, Linkedin, Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Cpu className="h-6 w-6" />
            <span className="font-bold text-lg">TokenCalc</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">
            The definitive resource for LLM memory estimation and hardware architecture planning. Providing granular VRAM insights for precision AI deployment.
          </p>
        </div>

        <div className="mb-8 flex justify-center space-x-6 items-center text-sm font-medium">
          <Link href="/legal/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
          <Link href="/legal/rights" className="text-muted-foreground hover:text-primary transition-colors">Content Rights</Link>
          <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Mission</Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Support</Link>
          <Link href="/legal/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} TokenCalc - LLM VRAM Estimator. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="https://www.linkedin.com/in/atharv-patil-bab53a284/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Linkedin className="h-4 w-4" />LinkedIn
            </Link>
            <Link href="mailto:atharvpatileoxs@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
