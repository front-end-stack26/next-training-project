// middleware.ts
import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  
  if (!req.auth) {
    return NextResponse.redirect(
      new URL("/project-demo/signup", req.url)
    )
  }
})

export const config = {
  matcher: ["/project-demo/checkout"],
}