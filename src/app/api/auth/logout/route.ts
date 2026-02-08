// import { NextResponse } from "next/server";

// export async function POST() {
//   const response = NextResponse.json({ ok: true });
//   response.cookies.set({
//     name: "auth_token",
//     value: "",
//     path: "/",
//     maxAge: 0,
//   });
//   return response;
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
