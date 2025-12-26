import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { appContent, TimelineEntry } from '@/lib/content';

const TimelineItem = ({
  item,
  isLast,
}: {
  item: TimelineEntry;
  isLast: boolean;
}) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-primary/50 text-primary font-bold text-sm">
        {item.year.toString().slice(-2)}
      </div>
      {!isLast && <div className="w-px h-full min-h-[10rem] bg-primary/20" />}
    </div>
    <div className="flex-1 pb-12">
      <h2 className="font-headline text-3xl text-foreground mb-2">{item.title}</h2>
      <p className="text-lg text-foreground/70 leading-relaxed">
        {item.content}
      </p>
    </div>
  </div>
);

export default function OurFiveYearsPage() {
  const timelineContent = appContent.timeline;
  return (
    <div className="w-full">
      <header className="text-center mb-16">
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
