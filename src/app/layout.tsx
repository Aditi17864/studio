import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import FloatingParticles from '@/components/ui/floating-particles';

export const metadata: Metadata = {
  title: 'For Tush',
  description: 'A special message.',
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
          'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent via-background to-[hsl(var(--galaxy-dark))]'
        )}
      >
        <FloatingParticles count={30} />
        <main className="relative z-10">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
