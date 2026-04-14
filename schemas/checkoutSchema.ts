import { z } from "zod";

export const checkoutSchema = z.object({
    name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters long"),
    address: z.string().min(4, "Address must be at least 5 characters long"),
    city: z.string().min(2,"City must be at least 2 characters long"),
    phone: z.string().min(6, "Phone number is too short").regex(/^[0-9+\s()-]+$/, "Invalid phone number format")
})

export type checkoutSchemaType = z.infer<typeof checkoutSchema>;