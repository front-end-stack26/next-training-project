import { NextRequest, NextResponse } from "next/server";

const REDIRECT_PATH = "/day-1/test-middleware/auth";

export function proxy(request: NextRequest) {
  // Prevent redirect loops when already at destination.
  if (request.nextUrl.pathname === REDIRECT_PATH) {
    return NextResponse.next();
  }

  const targetUrl = new URL(REDIRECT_PATH, request.url);

  return NextResponse.redirect(targetUrl, 307);
}

export const config = {
  matcher: ["/day-1/test-middleware", "/day-1/test-middleware/:path*"],
};