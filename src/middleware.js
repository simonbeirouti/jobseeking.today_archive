import { NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req) {
  const authProtectedPaths = ["/account", "/dashboard"];

  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    if (
      authProtectedPaths.some((path) => req.nextUrl.pathname.startsWith(path))
    ) {
      const redirectUrl = req.nextUrl.clone();
      redirectUrl.pathname = "/login";
      return NextResponse.redirect(redirectUrl);
    }
  }
}

export const config = {
  matcher: ["/account/:path*", "/dashboard/:path*"],
};
