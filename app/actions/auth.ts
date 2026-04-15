"use server"

import { signIn, signOut } from "@/lib/auth"

export async function signInGithub() {
  await signIn("github", {
    callbackUrl: "/project-demo/checkout",
  })
}

export async function signin(formData: FormData) {
  await signIn("credentials", {
    email: formData.get("email"),
    password: formData.get("password"),
    redirect: true,
    redirectTo: "/project-demo/checkout"
  })
}

export async function logout() {
  await signOut({
    redirectTo: "/project-demo",
  })
}
