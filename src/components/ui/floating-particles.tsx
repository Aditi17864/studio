'use client';

import { useEffect, useMemo, useState } from 'react';

const heartColors = [
  'text-red-400/70',
  'text-pink-400/70',
  'text-rose-400/70',
  'text-red-300/70',
  'text-pink-300/70',
  'text-white/70',
];

const Star = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12,17.27L18.18,21L17,14.64L22,9.24L15.81,8.62L12,3L8.19,8.62L2,9.24L7,14.64L5.82,21L12,17.27Z" />
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
      const size = `${Math.random() * 15 + 5}px`;
      const duration = `${Math.random() * 25 + 20}s`;
      const delay = `${Math.random() * -45}s`;
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
          <Star className={color} />
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
