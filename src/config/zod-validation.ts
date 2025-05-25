import { ZodTypeAny } from 'zod';

export const validateWithZod = <T extends ZodTypeAny>(
  schema: T,
): ((config: unknown) => T['_output']) => {
  return (config: unknown) => {
    const result = schema.safeParse(config);
    if (!result.success) {
      const formatted = result.error.format();
      console.error('❌ Invalid environment variables:', formatted);
      throw new Error('Invalid environment variables');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result.data;
  };
};
