// import { cookies } from "next/headers";

// import { verifyAuthToken } from "@/lib/auth";

// export async function getAdminPayload() {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("auth_token")?.value;
//   if (!token) return null;
//   const payload = await verifyAuthToken(token);
//   if (!payload || payload.role !== "ADMIN") return null;
//   return payload;
// }

// export async function isAdminRequest() {
//   return (await getAdminPayload()) !== null;
// }
