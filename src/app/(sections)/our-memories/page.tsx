
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { appContent, Memory } from '@/lib/content';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const MemoryCard = ({ memory }: { memory: Memory }) => {
  const image = PlaceHolderImages.find((img) => img.id === memory.image);

  return (
    <Card className="bg-card/60 backdrop-blur-sm border-border/50 overflow-hidden">
      {image && (
        <div className="aspect-video relative">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="object-cover"
            data-ai-hint={image.imageHint}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-3xl tracking-wide">
          {memory.title}
        </CardTitle>
        <CardDescription className="flex items-center gap-4 pt-1">
          <span className="flex items-center gap-1.5 text-xs text-foreground/70">
            <Calendar className="w-3.5 h-3.5" />
            {memory.date}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-foreground/70">
            <MapPin className="w-3.5 h-3.5" />
            {memory.location}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 leading-relaxed">
          {memory.note}
        </p>
      </CardContent>
    </Card>
  );
};

export default function OurMemoriesPage() {
  return (
    <div className="w-full">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          Our Memories
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
          Little moments, big feelings. Each one a treasure.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {appContent.memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </div>
  );
}
