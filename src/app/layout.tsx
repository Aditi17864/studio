import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import FloatingParticles from '@/components/ui/floating-particles';

export const metadata: Metadata = {
  title: 'Five Years of Us',
  description: 'A romantic apology.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400..900;1,400..900&family=Belleza&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          'font-body antialiased relative min-h-screen w-full',
          'bg-gradient-to-br from-background via-muted to-background'
        )}
      >
        <FloatingParticles count={20} />
        <main className="relative z-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
