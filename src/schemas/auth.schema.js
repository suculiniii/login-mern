import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "nombre de usuario es requerido"
    }),
    email: z.string({
        required_error:"direccion del email es requerida",
    }).email({
        message: 'direccion del email es invalida'
    }),
    password: z.string({
        required_error:'contraseña requerida'
    }).min(6,{
        message: 'la contraseña debe tener almenos 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error:"direccion del email es requerida",
    }).email({
        message: 'direccion del email es invalida'
    }),
    password: z.string({
        required_error:'contraseña requerida'
    }).min(6,{
        message: 'la contraseña debe tener almenos 6 caracteres'
    })
})