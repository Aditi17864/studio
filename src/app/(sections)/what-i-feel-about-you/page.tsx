import GentleMessageCrafter from '@/components/gentle-message-crafter';
import { appContent } from '@/lib/content';

export default function WhatIFeelAboutYouPage() {
  const section = appContent.apology_sections.find(
    (s) => s.id === 'what-i-feel-about-you'
  );

  if (!section) return null;

  return (
    <div className="w-full text-center">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          {section.title}
        </h1>
      </header>
      <main className="max-w-2xl mx-auto">
        <GentleMessageCrafter
          initialContent={section.content}
          contentId={section.id}
        />
      </main>
    </div>
  );
}
