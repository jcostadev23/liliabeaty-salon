// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import { createAuthToken } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";

// export async function POST(request: Request) {
//   const contentType = request.headers.get("content-type") ?? "";
//   let email = "";
//   let password = "";

//   if (contentType.includes("application/json")) {
//     const body = (await request.json()) as { email?: string; password?: string };
//     email = body.email?.trim().toLowerCase() ?? "";
//     password = body.password ?? "";
//   } else {
//     const form = await request.formData();
//     email = String(form.get("email") ?? "").trim().toLowerCase();
//     password = String(form.get("password") ?? "");
//   }

//   if (!email || !password) {
//     return NextResponse.json({ message: "Preenche email e password." }, { status: 400 });
//   }

//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (!user) {
//     return NextResponse.json({ message: "Credenciais invalidas." }, { status: 401 });
//   }

//   const matches = await bcrypt.compare(password, user.passwordHash);
//   if (!matches) {
//     return NextResponse.json({ message: "Credenciais invalidas." }, { status: 401 });
//   }

//   const token = await createAuthToken({
//     sub: user.id,
//     email: user.email,
//     name: user.name,
//     role: user.role,
//   });

//   const response = NextResponse.json({
//     ok: true,
//     user: { id: user.id, name: user.name, email: user.email, phoneNumber: user.phoneNumber },
//   });

//   response.cookies.set({
//     name: "auth_token",
//     value: token,
//     httpOnly: true,
//     sameSite: "lax",
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 60 * 60 * 8,
//   });

//   return response;
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
