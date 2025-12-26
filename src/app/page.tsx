import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function OpeningScreen() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center text-center p-4">
      <div
        className="flex flex-col items-center justify-center space-y-6 animate-fade-in-up"
        style={{ animationDuration: '1.5s' }}
      >
        <div className="text-center">
          <h1 className="font-headline text-4xl md:text-6xl text-primary tracking-wider">
            Hey Tush…
          </h1>
          <p className="font-headline text-2xl md:text-4xl mt-2 text-foreground/90">
            This app exists because you matter to me.
          </p>
        </div>
        <p className="text-lg md:text-xl max-w-md text-foreground/70">
          Five years. And still, you’re important.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full font-bold text-lg px-8 bg-primary/90 hover:bg-primary">
          <Link href="/home">Enter <Heart className="ml-2 h-5 w-5 fill-white" /></Link>
        </Button>
      </div>
    </div>
  );
}
