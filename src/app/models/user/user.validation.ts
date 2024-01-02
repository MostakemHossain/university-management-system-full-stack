import { z } from "zod";

const createUserValidationSchema=z.object({
    id:z.string(),
    password:z.string({
        required_error:"Password is Required"
    }).min(20,'Password Cannot be more than 20 Characters'),
    needsPasswordChange:z.boolean().optional().default(true),
    role:z.enum(['admin', 'student', 'faculty']),
    status:z.enum(['in-progress', 'blocked']).default('in-progress'),
    isDeleted:z.boolean().optional().default(false),
})

export const UserValidation= {
    createUserValidationSchema
}