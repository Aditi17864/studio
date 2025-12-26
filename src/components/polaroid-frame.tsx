'use client';

import Image from 'next/image';

type PolaroidFrameProps = {
  src: string;
  caption: string;
};

export default function PolaroidFrame({ src, caption }: PolaroidFrameProps) {
  return (
    <div className="bg-white p-4 pb-16 rounded-sm shadow-lg transform -rotate-3 transition-transform hover:rotate-0 hover:scale-105 w-full max-w-sm">
      <div className="relative w-full aspect-square">
        <Image
          src={src}
          alt={caption}
          fill
          className="object-cover"
        />
      </div>
       <p className="font-headline text-2xl text-center mt-4 text-gray-800 absolute bottom-4 left-0 right-0">
        {caption}
      </p>
    </div>
  );
}
