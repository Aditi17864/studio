import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OpeningScreen() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center p-4">
      <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in-up duration-1000">
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-6xl text-primary-foreground/80 tracking-wider">
            2020 → 2025
          </h1>
          <p className="font-headline text-3xl md:text-5xl mt-2 text-foreground">
            Five years of knowing you.
          </p>
        </div>
        <p className="text-lg md:text-xl max-w-md text-foreground/70">
          Some connections don’t fade… even when silence appears.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg px-8">
          <Link href="/home">Continue</Link>
        </Button>
      </div>
    </div>
  );
}
