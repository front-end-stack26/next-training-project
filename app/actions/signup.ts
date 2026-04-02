"use server"

import { z } from "zod";
import { users } from "@/data/users";
import { redirect } from "next/navigation";

const SignupSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Minimum 6 characters"),
    confirm: z.string()
}).refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
})

export async function  signupAction(formData: FormData) {
    const raw = {
        email: formData.get("email"),
        password: formData.get("password"),
        confirm: formData.get("confirm"),
    };

    const result = SignupSchema.safeParse(raw);

    
    if (!result.success) {
        return { errors: result.error.flatten().fieldErrors };
    }

    const { email, password } = result.data;

    if(users.some(user => user.email === email)) {
        return { errors: { email: ["Email already exists"] }}
    }

    users.push({ email, password})

    console.log("New User Created:", email);

    redirect("/project-demo/checkout");
}