// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import { createAuthToken } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";
// import { validatePassword } from "@/lib/validation";

// export async function POST(request: Request) {
//   const body = (await request.json()) as {
//     name?: string;
//     email?: string;
//     phoneNumber?: string;
//     password?: string;
//   };

//   const name = body.name?.trim() ?? "";
//   const email = body.email?.trim().toLowerCase() ?? "";
//   const phoneNumber = body.phoneNumber?.trim() || null;
//   const password = body.password ?? "";

//   if (!name || !email || !password) {
//     return NextResponse.json(
//       { message: "Preenche nome, email e password." },
//       { status: 400 },
//     );
//   }

//   const validation = validatePassword(password);
//   if (!validation.ok) {
//     return NextResponse.json({ message: validation.message }, { status: 400 });
//   }

//   const existing = await prisma.user.findUnique({ where: { email } });
//   if (existing) {
//     return NextResponse.json({ message: "Email ja existe." }, { status: 409 });
//   }

//   const passwordHash = await bcrypt.hash(password, 10);
//   try {
//     const user = await prisma.user.create({
//       data: { name, email, phoneNumber, passwordHash, role: "USER" },
//     });

//     const token = await createAuthToken({
//       sub: user.id,
//       email: user.email,
//       name: user.name,
//       role: user.role,
//     });

//     const response = NextResponse.json({
//       ok: true,
//       user: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         phoneNumber: user.phoneNumber,
//       },
//     });

//     response.cookies.set({
//       name: "auth_token",
//       value: token,
//       httpOnly: true,
//       sameSite: "lax",
//       secure: process.env.NODE_ENV === "production",
//       path: "/",
//       maxAge: 60 * 60 * 8,
//     });

//     return response;
//   } catch (error: any) {
//     if (error?.code === "P2002") {
//       return NextResponse.json(
//         { message: "Email ou telemovel ja existe." },
//         { status: 409 },
//       );
//     }
//     return NextResponse.json({ message: "Erro ao criar utilizador." }, { status: 500 });
//   }
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
