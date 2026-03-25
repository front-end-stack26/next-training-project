import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
// import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
    "/project-demo/checkout",
    "/project-demo/orders",
    "/project-demo/orders/[id]",
    "/project-demo/checkout/success",
]);

export default clerkMiddleware(async (auth, req) => {
    if(isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


// export function middleware(request) {
//     return NextResponse.redirect(new URL('/day-1/test-middleware/auth', request.url))
// }

// export const config = {
//     matcher: ["/day-1/test-middleware"],
// }