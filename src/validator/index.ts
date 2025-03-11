import { type z } from 'zod';

const validateSchema = <T>(schema: z.ZodType<T>, data: any): { success: boolean; data: T | null; error?: z.ZodError } => {
	const validation = schema.safeParse(data);
	if (validation.success) {
		return { success: true, data: validation.data };
	} else {
		return { success: false, data: null, error: validation.error }; // TODO: parse error to be more readable
	}
};

export { validateSchema };
