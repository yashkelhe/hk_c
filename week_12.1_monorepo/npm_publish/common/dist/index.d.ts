import { z } from "zod";
export declare const sign: z.ZodObject<{
    username: z.ZodString;
    name: z.ZodString;
    age: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    username: string;
    name: string;
    age: number;
}, {
    username: string;
    name: string;
    age: number;
}>;
export type inferZod = z.infer<typeof sign>;
