// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function RegisterPage() {
//   const router = useRouter();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, phoneNumber, password }),
//       });

//       if (!response.ok) {
//         const data = (await response.json()) as { message?: string };
//         setError(data.message ?? "Falha no registo.");
//         setLoading(false);
//         return;
//       }

//       router.push("/");
//       router.refresh();
//     } catch {
//       setError("Nao foi possivel criar conta.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#f7f1ee] px-4 py-12">
//       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f3d7cf] blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-8 h-80 w-80 rounded-full bg-[#e8e2f4] blur-3xl" />

//       <div className="relative mx-auto flex min-h-[80vh] max-w-4xl items-center justify-center">
//         <div className="w-full rounded-[32px] bg-white/80 p-8 shadow-[0_30px_120px_-60px_rgba(80,44,24,0.45)] backdrop-blur sm:p-12">
//           <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
//             Lilia Beauty Salon
//           </p>
//           <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-900">
//             Criar nova conta
//           </h1>
//           <p className="mt-3 text-base text-zinc-600">
//             Regista um novo utilizador para aceder ao painel.
//           </p>

//           <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
//             <div className="sm:col-span-2">
//               <label className="text-sm font-medium text-zinc-700" htmlFor="name">
//                 Nome completo
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 value={name}
//                 onChange={(event) => setName(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-zinc-700" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-zinc-700" htmlFor="phoneNumber">
//                 Telemovel
//               </label>
//               <input
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 type="tel"
//                 value={phoneNumber}
//                 onChange={(event) => setPhoneNumber(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//             </div>

//             <div className="sm:col-span-2">
//               <label className="text-sm font-medium text-zinc-700" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//               <p className="mt-2 text-xs text-zinc-500">
//                 Min 8 chars, 1 maiuscula, 1 minuscula, 1 numero, 1 simbolo.
//               </p>
//             </div>

//             {error ? (
//               <div className="sm:col-span-2 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                 {error}
//               </div>
//             ) : null}

//             <div className="sm:col-span-2">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
//               >
//                 {loading ? "A criar..." : "Criar conta"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function RegisterPage() {
  return <div>Register page under maintenance</div>;
}
