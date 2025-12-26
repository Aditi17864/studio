import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { appContent, TimelineEntry } from '@/lib/content';
import { Circle } from 'lucide-react';

const TimelineItem = ({
  item,
  isLast,
}: {
  item: TimelineEntry;
  isLast: boolean;
}) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-6">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground/80 font-bold text-xs">
        {item.year.toString().slice(-2)}
      </div>
      {!isLast && <div className="w-px h-full bg-border" />}
    </div>
    <Card className="flex-1 mb-8 bg-card/60 backdrop-blur-sm border-border/50">
      <CardHeader>
        <CardTitle className="font-headline text-3xl tracking-wide">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 leading-relaxed">{item.content}</p>
      </CardContent>
    </Card>
  </div>
);

export default function OurFiveYearsPage() {
  const timelineContent = appContent.timeline;
  return (
    <div className="w-full">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          Our Five Years
        </h1>
      </header>
      <div className="relative">
        {timelineContent.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            isLast={index === timelineContent.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
