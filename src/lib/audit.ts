// import { prisma } from "@/lib/prisma";

// export type AuditAction = "USER_CREATE" | "USER_UPDATE" | "USER_DELETE";

// export async function writeAuditLog(params: {
//   actorId: string;
//   actorEmail: string;
//   action: AuditAction;
//   targetUserId?: string | null;
//   details?: Record<string, unknown>;
// }) {
//   const { actorId, actorEmail, action, targetUserId, details } = params;
//   await prisma.auditLog.create({
//     data: {
//       actorId,
//       actorEmail,
//       action,
//       targetUserId: targetUserId ?? null,
//       details: details ? JSON.stringify(details) : null,
//     },
//   });
// }
