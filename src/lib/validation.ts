// export function validatePassword(password: string) {
//   const issues: string[] = [];
//   if (password.length < 8) issues.push("minimo 8 caracteres");
//   if (!/[A-Z]/.test(password)) issues.push("1 letra maiuscula");
//   if (!/[a-z]/.test(password)) issues.push("1 letra minuscula");
//   if (!/\d/.test(password)) issues.push("1 numero");
//   if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
//     issues.push("1 simbolo");
//   }
//   return {
//     ok: issues.length === 0,
//     message: issues.length ? `Password fraca: ${issues.join(", ")}.` : "",
//   };
// }
