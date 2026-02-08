// "use client";

// import { useState } from "react";

// export default function ResetRequestPage() {
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState("");

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setStatus("");
//     setToken("");
//     setLoading(true);

//     try {
//       const response = await fetch("/api/auth/reset-request", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = (await response.json()) as { token?: string };
//       setStatus("Se o email existir, enviamos um link de reset.");
//       if (data.token) {
//         setToken(data.token);
//       }
//     } catch {
//       setStatus("Nao foi possivel processar o pedido.");
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
//             Reset de password
//           </h1>
//           <p className="mt-3 text-base text-zinc-600">
//             Indica o teu email para receberes o link de reset.
//           </p>

//           <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
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

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full rounded-2xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-70"
//             >
//               {loading ? "A enviar..." : "Pedir reset"}
//             </button>
//           </form>

//           {status ? (
//             <div className="mt-6 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
//               {status}
//               {token ? (
//                 <p className="mt-3 text-xs text-zinc-500">
//                   Token de teste: <span className="font-mono">{token}</span>
//                 </p>
//               ) : null}
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function ResetPage() {
  return <div>Reset page under maintenance</div>;
}
