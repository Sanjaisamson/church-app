import { z } from 'zod';

export const CreateUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string().optional(),
    email: z.string(),
    password: z.string(),
    role:z.string(),
    phoneNumber: z.string(),
})

export type CreateUserReqBody = z.infer<typeof CreateUserSchema>;

export const LoginUserSchema = z.object({
    email: z.string(),
    password: z.string()
})

export type LoginUserReqBody = z.infer<typeof LoginUserSchema>;
