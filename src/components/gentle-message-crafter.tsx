'use client';

import { refineMessageAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Edit, Save, Wand2, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

type GentleMessageCrafterProps = {
  initialContent: string;
  contentId: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Refining...' : <><Wand2 className="mr-2 h-4 w-4" /> Refine with AI</>}
    </Button>
  );
}

export default function GentleMessageCrafter({
  initialContent,
  contentId,
}: GentleMessageCrafterProps) {
  const [message, setMessage] = useState(initialContent);
  const [isEditing, setIsEditing] = useState(false);
  const { toast } = useToast();

  const [state, formAction] = useFormState(refineMessageAction, {
    refinedMessage: '',
    error: '',
  });

  useEffect(() => {
    if (state.refinedMessage) {
      setMessage(state.refinedMessage);
      toast({
        title: 'Message Refined',
        description: 'The AI has suggested a new version of your message.',
      });
    }
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  const handleSave = () => {
    setIsEditing(false);
    toast({
        title: 'Content Saved',
        description: 'Your message has been updated locally.',
    })
  }

  if (isEditing) {
    return (
      <Card className="bg-card/80 backdrop-blur-sm border-primary/50 text-left">
        <CardContent className="p-6">
          <form action={formAction}>
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="text-lg leading-relaxed min-h-[200px] bg-background"
            />
            <input type="hidden" name="contentId" value={contentId} />
            <div className="mt-4 flex flex-wrap gap-2 justify-end">
              <SubmitButton />
              <Button type="button" variant="secondary" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Save
              </Button>
               <Button type="button" variant="ghost" size="icon" onClick={() => setIsEditing(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative group">
      <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed whitespace-pre-wrap">
        {message}
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="absolute -top-2 -right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={() => setIsEditing(true)}
      >
        <Edit className="h-5 w-5 text-primary" />
      </Button>
    </div>
  );
}
