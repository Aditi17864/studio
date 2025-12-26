import { Card, CardContent } from '@/components/ui/card';
import { appContent } from '@/lib/content';

export default function OneSoftPromisePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
       <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          {appContent.final_promise.title}
        </h1>
      </header>
      <main>
        <p className="text-2xl md:text-3xl text-foreground/80 leading-relaxed max-w-2xl">
          {appContent.final_promise.text}
        </p>
      </main>
    </div>
  );
}
