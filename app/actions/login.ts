"use server"

import { z } from "zod";
import { users } from "@/data/users";
import { redirect } from "next/navigation"

const LoginSchema =  z.object({
  email: z.string().email("Invalide email adresse"),
  password: z.string().min(6, "Minimum 6 characters"),
});

export async function loginAction(formData: FormData) {
    const rawData ={
        email: formData.get("email"),
        password: formData.get("password")
    }

    const result = LoginSchema.safeParse(rawData);

    if(!result.success) {        
        return { errors: result.error.flatten().fieldErrors};
    }

    const { email, password } = result.data;
    if(!users.some(user => user.email === email && user.password === password)) {
        return { errors: { email: ["Invalid credentials"] } };
    }

    console.log("login sucess");
    
    redirect("/project-demo/checkout");
}
