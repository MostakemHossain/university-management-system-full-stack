import { z } from "zod";

const createUserValidationSchema=z.object({
    password:z.string({
        invalid_type_error:"Password must be string"
    }).min(20,'Password Cannot be more than 20 Characters').optional(),
})

export const UserValidation= {
    createUserValidationSchema
}