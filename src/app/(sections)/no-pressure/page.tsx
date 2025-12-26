import GentleMessageCrafter from '@/components/gentle-message-crafter';
import { appContent } from '@/lib/content';

export default function NoPressurePage() {
  const section = appContent.no_pressure;

  return (
    <div className="w-full text-center flex flex-col items-center justify-center min-h-[60vh]">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          {section.title}
        </h1>
      </header>
      <main className="max-w-2xl mx-auto">
         <GentleMessageCrafter
          initialContent={section.content}
          contentId="no-pressure"
        />
      </main>
    </div>
  );
}
