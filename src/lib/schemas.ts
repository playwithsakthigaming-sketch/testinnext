
import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().min(1, 'Email or Profile URL is required'),
  password: z.string().min(1, 'Password is required'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
