import { cookies } from "next/headers";

import { LogoutButton } from "@/components/LogoutButton";
import { verifyAuthToken } from "@/lib/auth";
// import { prisma } from "@/lib/prisma";

export default async function Home() {
  // const cookieStore = await cookies();
  // const token = cookieStore.get("auth_token")?.value;
  // const payload = token ? await verifyAuthToken(token) : null;
  // const user = payload
  //   ? await prisma.user.findUnique({
  //       where: { id: payload.sub },
  //       select: { name: true, email: true, phoneNumber: true, createdAt: true },
  //     })
  //   : null;
  const user = {
    name: "Joao Costa",
    email: "joao.costa@example.com",
    phoneNumber: "123456789",
    createdAt: new Date(),
  };

  console.log("home");

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <main className="w-full max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Lilia Beauty Salon
            </p>
            <h1 className="text-3xl font-semibold text-zinc-900">
              Bem-vindo ao painel privado
            </h1>
            <p className="text-base text-zinc-600">
              Esta area esta protegida por token. Se conseguires ver isto, o
              middleware validou o teu login.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-6 text-sm text-zinc-700 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase text-zinc-400">Utilizador</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">
                {user?.name ?? "--"}
              </p>
              <p className="text-zinc-500">{user?.email ?? "--"}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-zinc-400">Telemovel</p>
              <p className="mt-1 text-lg font-semibold text-zinc-900">
                {user?.phoneNumber ?? "Sem telefone"}
              </p>
              <p className="text-zinc-500">
                Criado em{" "}
                {user?.createdAt ? user.createdAt.toLocaleDateString() : "--"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LogoutButton />
            <a
              href="/users"
              className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 hover:bg-zinc-100"
            >
              Gerir utilizadores
            </a>
            <span className="text-xs text-zinc-400">
              Expiracao do token: 8 horas.
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
