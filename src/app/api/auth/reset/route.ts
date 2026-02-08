// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import { prisma } from "@/lib/prisma";
// import { validatePassword } from "@/lib/validation";

// export async function POST(request: Request) {
//   const body = (await request.json()) as { token?: string; password?: string };
//   const token = body.token?.trim() ?? "";
//   const password = body.password ?? "";

//   if (!token || !password) {
//     return NextResponse.json(
//       { message: "Token e password sao obrigatorios." },
//       { status: 400 },
//     );
//   }

//   const validation = validatePassword(password);
//   if (!validation.ok) {
//     return NextResponse.json({ message: validation.message }, { status: 400 });
//   }

//   const user = await prisma.user.findFirst({
//     where: {
//       resetToken: token,
//       resetTokenExpires: { gt: new Date() },
//     },
//   });

//   if (!user) {
//     return NextResponse.json({ message: "Token invalido." }, { status: 400 });
//   }

//   const passwordHash = await bcrypt.hash(password, 10);
//   await prisma.user.update({
//     where: { id: user.id },
//     data: { passwordHash, resetToken: null, resetTokenExpires: null },
//   });

//   return NextResponse.json({ ok: true });
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
