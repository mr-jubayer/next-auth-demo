import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const middleware = async (req) => {
  const token = await getToken({ req });
  const isTokenOk = Boolean(token);
  const isAdminUser = token?.role === "admin";

  const isAdminRouteSpecific = req.nextUrl.pathname.startsWith("/dashboard");

  if (!isAdminUser && isAdminRouteSpecific) {
    // after successful login if the user is admin then redirect their actual route
    const callbackUrl = encodeURIComponent(req.nextUrl.pathname);
    return NextResponse.redirect(
      new URL(`/api/auth/signin?callbackUrl=${callbackUrl}`, req.url)
    );
  }

  return NextResponse.next();
};

export default middleware;
