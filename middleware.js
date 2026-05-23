import { NextResponse } from "next/server";

function parseJwt(token) {
  try {
    const base64Payload = token.split(".")[1];
    const payload = JSON.parse(atob(base64Payload));
    return payload;
  } catch (e) {
    return null;
  }
}

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  // public routes
  if (
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const decoded = parseJwt(token);

  // ❌ invalid token
  if (!decoded || !decoded.exp) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ❌ expired token check
  const now = Math.floor(Date.now() / 1000);
  if (decoded.exp < now) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};