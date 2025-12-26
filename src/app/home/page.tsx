import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { appContent } from '@/lib/content';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16 sm:py-24 animate-fade-in-up">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          {appContent.home.header}
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
          {appContent.home.body}
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appContent.navigation.map((item) => (
            <Link href={item.href} key={item.id} className="group">
              <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-2xl font-headline tracking-wide text-foreground">
                    {item.title}
                    <ArrowRight className="w-5 h-5 text-primary/70 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
