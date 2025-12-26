'use server';

import { refineApologyMessage } from '@/ai/flows/refine-apology-message';

interface FormState {
  refinedMessage?: string;
  error?: string;
}

export async function refineMessageAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const message = formData.get('message') as string;
  if (!message) {
    return { error: 'Message cannot be empty.' };
  }

  try {
    const result = await refineApologyMessage({ message });
    if(result.refinedMessage){
      return { refinedMessage: result.refinedMessage };
    }
    return { error: 'The AI could not refine the message. Please try a different message.' };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return { error: `Failed to refine message: ${errorMessage}` };
  }
}
