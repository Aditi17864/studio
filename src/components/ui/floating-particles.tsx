'use client';

import { cn } from '@/lib/utils';
import { useMemo } from 'react';

type FloatingParticlesProps = {
  count?: number;
  className?: string;
};

export default function FloatingParticles({ count = 20, className }: FloatingParticlesProps) {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const size = `${Math.random() * 3 + 1}px`;
      const duration = `${Math.random() * 20 + 10}s`;
      const delay = `${Math.random() * -30}s`;
      const left = `${Math.random() * 100}%`;
      return (
        <div
          key={i}
          className={cn('absolute top-full rounded-full bg-accent/50', className)}
          style={{
            width: size,
            height: size,
            left,
            animation: `float ${duration} ${delay} linear infinite`,
          }}
        />
      );
    });
  }, [count, className]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
}
