// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         const data = (await response.json()) as { message?: string };
//         setError(data.message ?? "Login falhou.");
//         setLoading(false);
//         return;
//       }

//       router.push("/");
//       router.refresh();
//     } catch {
//       setError("Nao foi possivel iniciar sessao.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#f7f1ee] px-4 py-12">
//       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f3d7cf] blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-8 h-80 w-80 rounded-full bg-[#e8e2f4] blur-3xl" />

//       <div className="relative mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center">
//         <div className="grid w-full gap-10 rounded-[32px] bg-white/80 p-8 shadow-[0_30px_120px_-60px_rgba(80,44,24,0.45)] backdrop-blur sm:grid-cols-[1.1fr_1fr] sm:p-12">
//           <div className="flex flex-col justify-between">
//             <div>
//               <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
//                 Lilia Beauty Salon
//               </p>
//               <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-900">
//                 Bem-vinda ao teu painel de gestao.
//               </h1>
//               <p className="mt-4 text-base text-zinc-600">
//                 Agenda, clientes e servicos organizados num so lugar. Inicia sessao para
//                 continuares.
//               </p>
//             </div>

//             <div className="mt-10 rounded-2xl border border-white/60 bg-white/70 p-5 text-xs text-zinc-600">
//               <p className="font-semibold text-zinc-800">Contas de teste</p>
//               <p className="mt-2">admin@lilia.com / admin123</p>
//               <p>carla@lilia.com / carla123</p>
//               <p>marta@lilia.com / marta123</p>
//             </div>
//           </div>

//         <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
//             <div>
//               <label className="text-sm font-medium text-zinc-700" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//             </div>

//             <div>
//               <label className="text-sm font-medium text-zinc-700" htmlFor="password">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="current-password"
//                 required
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-400 focus:ring-2 focus:ring-[#f1b9a3]"
//               />
//             </div>

//             {error ? (
//               <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//                 {error}
//               </div>
//             ) : null}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "A entrar..." : "Entrar"}
//             </button>

//             <div className="flex items-center justify-between text-xs text-zinc-500">
//               <a className="underline-offset-4 hover:underline" href="/reset">
//                 Esqueci-me da password
//               </a>
//               <a className="underline-offset-4 hover:underline" href="/register">
//                 Criar conta
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function LoginPage() {
  return <div>Login page under maintenance</div>;
}
