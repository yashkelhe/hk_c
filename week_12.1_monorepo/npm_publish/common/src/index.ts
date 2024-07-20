// here we write all the zod logic
import { z } from "zod";

export const sign = z.object({
  username: z.string(),
  name: z.string(),
  age: z.number(),
});

// and  also export the infer
export type inferZod = z.infer<typeof sign>;
