// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// type Props = {
//   params: { token: string };
// };

// export default function ResetTokenPage({ params }: Props) {
//   const router = useRouter();
//   const [password, setPassword] = useState("");
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setStatus("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/auth/reset", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ token: params.token, password }),
//       });

//       if (!response.ok) {
//         const data = (await response.json()) as { message?: string };
//         setStatus(data.message ?? "Nao foi possivel alterar a password.");
//         setLoading(false);
//         return;
//       }

//       setStatus("Password atualizada. Faz login.");
//       setTimeout(() => router.push("/login"), 800);
//     } catch {
//       setStatus("Nao foi possivel alterar a password.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#f7f1ee] px-4 py-12">
//       <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#f3d7cf] blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-8 h-80 w-80 rounded-full bg-[#e8e2f4] blur-3xl" />

//       <div className="relative mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
//         <div className="w-full rounded-[32px] bg-white/80 p-8 shadow-[0_30px_120px_-60px_rgba(80,44,24,0.45)] backdrop-blur sm:p-12">
//           <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
//             Lilia Beauty Salon
//           </p>
//           <h1 className="mt-5 text-3xl font-semibold leading-tight text-zinc-900">
//             Definir nova password
//           </h1>

//           <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label className="text-sm font-medium text-zinc-700" htmlFor="password">
//                 Nova password
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

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "A atualizar..." : "Atualizar password"}
//             </button>
//           </form>

//           {status ? (
//             <div className="mt-6 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
//               {status}
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ResetTokenPage() {
  return <div>Reset token page under maintenance</div>;
}
