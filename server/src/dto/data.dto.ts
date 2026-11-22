import { z } from "zod";

export const dataSchema = z.object({
  reading: z.number().min(1),
});

export type dataDto = z.infer<typeof dataSchema>;
