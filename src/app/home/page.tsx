import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { appContent } from '@/lib/content';
import { ArrowRight, Camera, Clapperboard, Gamepad2, Heart, HeartCrack, HeartPulse, Hourglass, Moon, Star } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'five-years': Hourglass,
  'sorry-for': HeartCrack,
  'you-matter': Star,
  'where-my-heart-belongs': HeartPulse,
  'our-memories': Clapperboard,
  'fun-games': Gamepad2,
  'photo-booth': Camera,
  'last-thing': Moon,
};

export default function HomePage() {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16 sm:py-24 animate-fade-in-up">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground flex items-center justify-center">
          For Tush <Heart className="w-24 h-24 md:w-28 md:h-28 ml-2 text-primary/80 fill-primary/80" />
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
          {appContent.home.body}
        </p>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {appContent.navigation.map((item) => {
            const Icon = iconMap[item.id] || ArrowRight;
            return (
              <Link href={item.href} key={item.id} className="group">
                <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl font-headline tracking-wide text-foreground">
                      <div className="flex items-center gap-3">
                        <Icon className="w-6 h-6 text-primary/80" />
                        {item.title}
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary/70 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
