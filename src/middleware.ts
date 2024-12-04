export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    // Protect all routes under /dashboard
    "/dashboard/:path*",
    
    // Exclude auth routes
    "/((?!api|_next/static|_next/image|favicon.ico|login|signup).*)",
  ]
}

