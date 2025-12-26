'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WINNING_SCORE = 10;

export default function HeartClickerGame() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState<'playing' | 'won'>('playing');
  const [heartPosition, setHeartPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        moveHeart();
      }, 1000); // Heart moves every second
      return () => clearInterval(interval);
    }
  }, [gameState]);

  const moveHeart = () => {
    const top = `${Math.random() * 80 + 10}%`;
    const left = `${Math.random() * 80 + 10}%`;
    setHeartPosition({ top, left });
  };

  const handleHeartClick = () => {
    if (gameState === 'playing') {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore >= WINNING_SCORE) {
        setGameState('won');
      } else {
        moveHeart();
      }
    }
  };

  const handlePlayAgain = () => {
    setScore(0);
    setGameState('playing');
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/50 text-center p-6">
      <CardContent className="p-0">
        {gameState === 'playing' ? (
          <>
            <h2 className="text-xl font-semibold text-foreground/90 mb-2">
              Catch the Heart!
            </h2>
            <p className="text-foreground/70 mb-4">
              Click the floating heart {WINNING_SCORE} times to win.
            </p>
            <p className="font-bold text-2xl text-primary mb-4">
              Score: {score}
            </p>
            <div className="relative w-full h-64 bg-muted rounded-lg overflow-hidden border border-primary/20">
              <AnimatePresence>
                <motion.div
                  key={`${heartPosition.top}-${heartPosition.left}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="absolute"
                  style={{ top: heartPosition.top, left: heartPosition.left }}
                  onClick={handleHeartClick}
                >
                  <Heart className="w-12 h-12 text-primary fill-primary cursor-pointer transform transition-transform hover:scale-125" />
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
             <Heart className="w-24 h-24 text-primary/80 fill-primary/80 animate-pulse" />
            <h2 className="font-headline text-4xl text-foreground mt-6 mb-2">
              You won the game...
            </h2>
            <p className="text-2xl text-foreground/80">...and I won you.</p>
            <Button onClick={handlePlayAgain} className="mt-8">
              Play Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
