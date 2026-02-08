export type AuthPayload = {
  sub: string;
  email: string;
  name: string;
  role: "ADMIN" | "USER";
  exp: number;
};

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function getSecret() {
  return process.env.AUTH_SECRET ?? "dev-secret-change-me";
}

function toBase64Url(bytes: Uint8Array) {
  let binary = "";
  for (let i = 0; i < bytes.length; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 =
    typeof btoa === "function"
      ? btoa(binary)
      : Buffer.from(binary, "binary").toString("base64");
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(input: string) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "===".slice((base64.length + 3) % 4);
  const binary =
    typeof atob === "function"
      ? atob(padded)
      : Buffer.from(padded, "base64").toString("binary");
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

async function hmacSha256(data: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return new Uint8Array(signature);
}

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i += 1) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}

export async function createAuthToken(payload: Omit<AuthPayload, "exp">) {
  console.log("createAuthToken", payload);
  const header = { alg: "HS256", typ: "JWT" };
  const exp = Date.now() + 1000 * 60 * 60 * 8;
  const body: AuthPayload = { ...payload, exp };
  const headerPart = toBase64Url(encoder.encode(JSON.stringify(header)));
  const payloadPart = toBase64Url(encoder.encode(JSON.stringify(body)));
  const data = `${headerPart}.${payloadPart}`;
  const signature = await hmacSha256(data, getSecret());
  const signaturePart = toBase64Url(signature);
  return `${data}.${signaturePart}`;
}

export async function verifyAuthToken(token: string) {
  console.log("verifyAuthToken", token);
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [headerPart, payloadPart, signaturePart] = parts;
  const data = `${headerPart}.${payloadPart}`;
  const expected = toBase64Url(await hmacSha256(data, getSecret()));
  if (!safeEqual(signaturePart, expected)) return null;

  try {
    const payloadBytes = fromBase64Url(payloadPart);
    const payload = JSON.parse(decoder.decode(payloadBytes)) as AuthPayload;
    if (!payload.exp || Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}
