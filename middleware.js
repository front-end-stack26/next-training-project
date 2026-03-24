import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.redirect(new URL('/day-1/test-middleware/auth', request.url))
}

export const config = {
    matcher: ["/day-1/test-middleware"],
}