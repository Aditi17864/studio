import HeartClickerGame from '@/components/heart-clicker-game';

export default function GamesPage() {
  return (
    <div className="w-full text-center flex flex-col items-center justify-center min-h-[70vh]">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          Fun & Love Games
        </h1>
        <p className="mt-4 text-xl text-foreground/80">
          A little game for a lot of love.
        </p>
      </header>
      <main className="w-full max-w-2xl">
        <HeartClickerGame />
      </main>
    </div>
  );
}
