// frontend/src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
	// Inject current pathname so layout.tsx can read it via headers()
	response.headers.set("x-pathname", request.nextUrl.pathname);
	return response;
}

export const config = {
	// Run on all routes except Next.js internals and static files
	matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};