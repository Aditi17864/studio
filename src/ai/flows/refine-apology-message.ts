// refine-apology-message.ts
'use server';
/**
 * @fileOverview A flow to refine apology messages using AI, ensuring they align with the app's emotional goals.
 *
 * - refineApologyMessage - A function that refines the apology message.
 * - RefineApologyMessageInput - The input type for the refineApologyMessage function.
 * - RefineApologyMessageOutput - The return type for the refineApologyMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RefineApologyMessageInputSchema = z.object({
  message: z
    .string()
    .describe('The apology message to refine.'),
});
export type RefineApologyMessageInput = z.infer<typeof RefineApologyMessageInputSchema>;

const RefineApologyMessageOutputSchema = z.object({
  refinedMessage: z
    .string()
    .describe('The refined apology message that aligns with the emotional goals.'),
});
export type RefineApologyMessageOutput = z.infer<typeof RefineApologyMessageOutputSchema>;

export async function refineApologyMessage(input: RefineApologyMessageInput): Promise<RefineApologyMessageOutput> {
  return refineApologyMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'refineApologyMessagePrompt',
  input: {schema: RefineApologyMessageInputSchema},
  output: {schema: RefineApologyMessageOutputSchema},
  prompt: `Refine the following apology message to ensure it aligns with the emotional goals of the app: remembered, respected, gently loved, not pressured, and safe to feel. The message should be a soft confession, a gentle apology, and a reminder of shared time, without forcing reconciliation, pressure or expectations. Just honesty and affection.

Original message: {{{message}}}`,
});

const refineApologyMessageFlow = ai.defineFlow(
  {
    name: 'refineApologyMessageFlow',
    inputSchema: RefineApologyMessageInputSchema,
    outputSchema: RefineApologyMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
