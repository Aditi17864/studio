'use client';

import PolaroidFrame from '@/components/polaroid-frame';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Camera, RefreshCcw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function PhotoBoothPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(true);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Not Supported',
          description: 'Your browser does not support camera access.',
        });
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
        });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description:
            'Please enable camera permissions in your browser settings to use this feature.',
        });
      }
    };

    if (!capturedImage) {
      getCameraPermission();
    }

    // Cleanup function to stop the video stream
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [toast, capturedImage]);

  const takePicture = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUrl = canvas.toDataURL('image/png');
        setCapturedImage(dataUrl);

        if (video.srcObject) {
          const stream = video.srcObject as MediaStream;
          stream.getTracks().forEach((track) => track.stop());
        }
      }
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
  };

  return (
    <div className="w-full text-center flex flex-col items-center justify-center min-h-[70vh]">
      <header className="mb-12">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          Photo Booth
        </h1>
        <p className="mt-4 text-xl text-foreground/80">
          Capture a moment.
        </p>
      </header>
      <main className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
        {capturedImage ? (
          <div className="flex flex-col items-center gap-6">
            <PolaroidFrame src={capturedImage} caption="my handsome" />
            <Button onClick={retakePicture}>
              <RefreshCcw className="mr-2 h-4 w-4" />
              Take Another
            </Button>
          </div>
        ) : (
          <div className="w-full flex flex-col items-center gap-4">
            <div className="w-full aspect-square bg-muted rounded-lg overflow-hidden shadow-lg border border-primary/20 flex items-center justify-center">
              <video
                ref={videoRef}
                className="w-full h-full object-cover scale-x-[-1]" // Flip horizontally
                autoPlay
                muted
                playsInline
              />
            </div>
            {hasCameraPermission && (
              <Button onClick={takePicture} size="lg" className="rounded-full">
                <Camera className="mr-2 h-5 w-5" />
                Take Picture
              </Button>
            )}
          </div>
        )}
        <canvas ref={canvasRef} className="hidden" />
      </main>
    </div>
  );
}
