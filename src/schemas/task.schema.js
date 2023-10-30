import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string({
        required_error:'titlr es requerido',
    }),
    description: z.string({
        required_error:"descripcion es requerida",
    }),
    date: z.string().datetime().optional()
})