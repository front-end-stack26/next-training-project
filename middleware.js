import { NextResponse } from "next/server";

export function middleware(request) {
    return NextResponse.redirect(new URL('/test-middleware/slug', request.url))
}

export const config = {
    matcher: ["/test-middleware"],
}