import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./app/utils/discorduser";

const admins = [
  "728992905460711486",
  "978044427975163964",
  "838091364344397835",
];

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const token = request.cookies.get("access_token")?.value!;
    if (!token) {
      return NextResponse.redirect(
        new URL("/api/auth/discord/login", request.url)
      );
    }
    try {
      const userdata = await getUser(token);

      if (!admins.includes(userdata.id)) {
        return NextResponse.json({
          error: "No tienes permisos para acceder a esta página",
        });
      }
    } catch (error) {
      console.error("Error obteniendo el usuario:", error);
    }
  }
}

export const config = {
  matcher: "/:path*",
};
