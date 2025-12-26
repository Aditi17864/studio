import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen container mx-auto px-4 py-16 sm:py-24 animate-fade-in-up">
      <div className="absolute top-6 left-6">
        <Button asChild variant="ghost">
          <Link href="/home">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="max-w-4xl mx-auto">{children}</div>
    </div>
  );
}
