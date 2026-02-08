// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// import { prisma } from "@/lib/prisma";
// import { getAdminPayload, isAdminRequest } from "@/lib/requireAdmin";
// import { validatePassword } from "@/lib/validation";
// import { writeAuditLog } from "@/lib/audit";

// export async function GET(request: Request) {
//   if (!(await isAdminRequest())) {
//     return NextResponse.json({ message: "Nao autorizado." }, { status: 403 });
//   }

//   const { searchParams } = new URL(request.url);
//   const search = searchParams.get("search")?.trim() ?? "";
//   const roleParam = searchParams.get("role");
//   const orderParam = searchParams.get("order") ?? "createdAt_desc";
//   const page = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);
//   const pageSize = Math.min(50, Math.max(5, Number(searchParams.get("pageSize") ?? "10") || 10));
//   const skip = (page - 1) * pageSize;

//   const whereRole =
//     roleParam === "ADMIN" || roleParam === "USER" ? { role: roleParam } : undefined;

//   const whereSearch = search
//     ? {
//         OR: [
//           { name: { contains: search, mode: "insensitive" } },
//           { email: { contains: search, mode: "insensitive" } },
//           { phoneNumber: { contains: search } },
//         ],
//       }
//     : undefined;

//   const where = whereRole && whereSearch ? { AND: [whereRole, whereSearch] } : whereRole ?? whereSearch;

//   const orderBy = (() => {
//     switch (orderParam) {
//       case "name_asc":
//         return { name: "asc" } as const;
//       case "name_desc":
//         return { name: "desc" } as const;
//       case "email_asc":
//         return { email: "asc" } as const;
//       case "email_desc":
//         return { email: "desc" } as const;
//       case "createdAt_asc":
//         return { createdAt: "asc" } as const;
//       case "createdAt_desc":
//       default:
//         return { createdAt: "desc" } as const;
//     }
//   })();

//   const [total, users] = await Promise.all([
//     prisma.user.count({ where }),
//     prisma.user.findMany({
//       where,
//       orderBy,
//       skip,
//       take: pageSize,
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         phoneNumber: true,
//         role: true,
//         createdAt: true,
//       },
//     }),
//   ]);

//   return NextResponse.json({ users, total, page, pageSize });
// }

// export async function POST(request: Request) {
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

//   const name = body.name?.trim() ?? "";
//   const email = body.email?.trim().toLowerCase() ?? "";
//   const phoneNumber = body.phoneNumber?.trim() || null;
//   const password = body.password ?? "";
//   const role = body.role === "ADMIN" ? "ADMIN" : "USER";

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

//   const passwordHash = await bcrypt.hash(password, 10);

//   try {
//     const user = await prisma.user.create({
//       data: { name, email, phoneNumber, passwordHash, role },
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
//       action: "USER_CREATE",
//       targetUserId: user.id,
//       details: { email: user.email, role: user.role },
//     });

//     return NextResponse.json({ user });
//   } catch (error: any) {
//     if (error?.code === "P2002") {
//       return NextResponse.json({ message: "Email ou telemovel ja existe." }, { status: 409 });
//     }
//     return NextResponse.json({ message: "Erro ao criar utilizador." }, { status: 500 });
//   }
// }

export async function GET() {
  return Response.json({ error: 'Not implemented' }, { status: 501 });
}
