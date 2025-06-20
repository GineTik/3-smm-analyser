import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

interface UserJwtPayload {
  isEmailVerified: boolean;
  [key: string]: unknown;
}

const loginRedirectUrl = "/auth";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get(
    process.env.COOKIE_TOKEN_KEY as string,
  )?.value;

  if (!sessionToken) {
    return NextResponse.redirect(new URL(loginRedirectUrl, request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify<UserJwtPayload>(sessionToken, secret);

    if (!payload.isEmailVerified) {
      const loginUrl = new URL(loginRedirectUrl, request.url);
      loginUrl.searchParams.set("error", "email_not_confirmed");
      return NextResponse.redirect(loginUrl);
    }
  } catch (error) {
    console.error("JWT verification error:", error);
    return NextResponse.redirect(new URL(loginRedirectUrl, request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/connections/:path*", "/analytics/:path*"],
};
