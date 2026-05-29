import { Cpu } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Cpu className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold text-primary font-headline">
        TokenCalc
      </span>
    </div>
  );
}
