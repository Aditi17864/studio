
'use client';

import { useEffect, useRef, useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

export default function WhereMyHeartBelongsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(true);
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
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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
          description: 'Please enable camera permissions in your browser settings to use this feature.',
        });
      }
    };

    getCameraPermission();
    
    // Cleanup function to stop the video stream
    return () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
    };
  }, [toast]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
       <header className="mb-8">
        <h1 className="font-headline text-5xl md:text-7xl text-foreground">
          Where My Heart Belongs
        </h1>
      </header>
      <main className="w-full max-w-2xl flex flex-col items-center gap-6">
        <div className="w-full aspect-video bg-muted rounded-lg overflow-hidden shadow-lg border border-primary/20 flex items-center justify-center">
          <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
        </div>
        {!hasCameraPermission && (
            <Alert variant="destructive" className="w-full">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Camera Access Required</AlertTitle>
              <AlertDescription>
                Please allow camera access in your browser to see this part.
              </AlertDescription>
            </Alert>
        )}
        <p className="font-headline text-5xl md:text-7xl text-primary/90 mt-4">
            It is you
        </p>
      </main>
    </div>
  );
}
