// import { NextResponse } from "next/server";
// import crypto from "crypto";

// import { prisma } from "@/lib/prisma";

// export async function POST(request: Request) {
//   const body = (await request.json()) as { email?: string };
//   const email = body.email?.trim().toLowerCase() ?? "";

//   if (!email) {
//     return NextResponse.json({ message: "Indica o email." }, { status: 400 });
//   }

//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) {
//     return NextResponse.json({ ok: true });
//   }

//   const resetToken = crypto.randomBytes(32).toString("hex");
//   const resetTokenExpires = new Date(Date.now() + 1000 * 60 * 30);

//   await prisma.user.update({
//     where: { id: user.id },
//     data: { resetToken, resetTokenExpires },
//   });

//   return NextResponse.json({ ok: true, token: resetToken });
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
