// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import { prisma } from "@/lib/prisma";
// import { getAdminPayload } from "@/lib/requireAdmin";
// import { validatePassword } from "@/lib/validation";
// import { writeAuditLog } from "@/lib/audit";

// type Params = {
//   params: { id: string };
// };

// export async function GET(_: Request, { params }: Params) {
//   const admin = await getAdminPayload();
//   if (!admin) {
//     return NextResponse.json({ message: "Nao autorizado." }, { status: 403 });
//   }

//   const user = await prisma.user.findUnique({
//     where: { id: params.id },
//     select: {
//       id: true,
//       name: true,
//       email: true,
//       phoneNumber: true,
//       role: true,
//       createdAt: true,
//     },
//   });

//   if (!user) {
//     return NextResponse.json({ message: "Utilizador nao encontrado." }, { status: 404 });
//   }

//   return NextResponse.json({ user });
// }

// export async function PATCH(request: Request, { params }: Params) {
//   const admin = await getAdminPayload();
//   if (!admin) {
//     return NextResponse.json({ message: "Nao autorizado." }, { status: 403 });
//   }

//   const body = (await request.json()) as {
//     name?: string;
//     email?: string;
//     phoneNumber?: string;
//     password?: string;
//     role?: "ADMIN" | "USER";
//   };

//   const data: {
//     name?: string;
//     email?: string;
//     phoneNumber?: string | null;
//     passwordHash?: string;
//     role?: "ADMIN" | "USER";
//   } = {};

//   if (body.name) data.name = body.name.trim();
//   if (body.email) data.email = body.email.trim().toLowerCase();
//   if (body.phoneNumber !== undefined) {
//     const trimmed = body.phoneNumber?.trim();
//     data.phoneNumber = trimmed ? trimmed : null;
//   }

//   if (body.password) {
//     const validation = validatePassword(body.password);
//     if (!validation.ok) {
//       return NextResponse.json({ message: validation.message }, { status: 400 });
//     }
//     data.passwordHash = await bcrypt.hash(body.password, 10);
//   }

//   if (body.role) {
//     data.role = body.role === "ADMIN" ? "ADMIN" : "USER";
//   }

//   try {
//     const user = await prisma.user.update({
//       where: { id: params.id },
//       data,
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         phoneNumber: true,
//         role: true,
//         createdAt: true,
//       },
//     });

//     await writeAuditLog({
//       actorId: admin.sub,
//       actorEmail: admin.email,
//       action: "USER_UPDATE",
//       targetUserId: user.id,
//       details: { email: user.email, role: user.role },
//     });

//     return NextResponse.json({ user });
//   } catch (error: any) {
//     if (error?.code === "P2002") {
//       return NextResponse.json({ message: "Email ou telemovel ja existe." }, { status: 409 });
//     }
//     return NextResponse.json({ message: "Erro ao atualizar utilizador." }, { status: 500 });
//   }
// }

// export async function DELETE(_: Request, { params }: Params) {
//   const admin = await getAdminPayload();
//   if (!admin) {
//     return NextResponse.json({ message: "Nao autorizado." }, { status: 403 });
//   }

//   try {
//     if (params.id === admin.sub) {
//       return NextResponse.json(
//         { message: "Nao podes remover a tua propria conta." },
//         { status: 400 },
//       );
//     }

//     await prisma.user.delete({ where: { id: params.id } });

//     await writeAuditLog({
//       actorId: admin.sub,
//       actorEmail: admin.email,
//       action: "USER_DELETE",
//       targetUserId: params.id,
//     });

//     return NextResponse.json({ ok: true });
//   } catch {
//     return NextResponse.json({ message: "Erro ao remover utilizador." }, { status: 500 });
//   }
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
