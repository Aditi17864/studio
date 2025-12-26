'use client';

import { useEffect, useMemo, useState } from 'react';

const heartColors = [
  'text-red-400/50',
  'text-pink-400/50',
  'text-rose-400/50',
  'text-red-300/50',
  'text-pink-300/50',
];

const HeartIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={color}
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);


export default function FloatingParticles({ count = 20 }: { count?: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!isMounted) {
      return [];
    }
    return Array.from({ length: count }).map((_, i) => {
      const size = `${Math.random() * 40 + 20}px`; // Increased size
      const duration = `${Math.random() * 25 + 15}s`;
      const delay = `${Math.random() * -40}s`;
      const left = `${Math.random() * 100}%`;
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      return (
        <div
          key={i}
          className={'absolute top-full'}
          style={{
            width: size,
            height: size,
            left,
            animation: `float ${duration} ${delay} linear infinite`,
          }}
        >
          <HeartIcon color={color} />
        </div>
      );
    });
  }, [count, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
}
