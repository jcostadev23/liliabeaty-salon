"use client";

import { useUsersFilter } from "@/hooks/useUsersFilter";
import { useUsersContext } from "@/contexts/UsersContext";
import { User, RoleFilter } from "@/app/types";

interface UsersSectionProps {
  onEditUser: (user: User) => void;
}

const UsersSection = ({ onEditUser }: UsersSectionProps) => {
  const { deleteUser } = useUsersContext();
  const {
    users,
    total,
    page,
    roleFilter,
    search,
    order,
    loading,
    totalPages,
    setSearch,
    setRoleFilter,
    setOrder,
    setPage,
    refresh,
  } = useUsersFilter();

  const handleDelete = async (id: string) => {
    if (confirm("Deseja remover este utilizador?")) {
      await deleteUser(id);
    }
  };

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900">Utilizadores</h2>
        <button
          type="button"
          className="text-xs font-semibold text-zinc-500 underline-offset-4 hover:underline"
          onClick={refresh}
        >
          Atualizar
        </button>
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-[1.4fr_0.8fr_auto]">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar por nome, email ou telemovel"
          className="rounded-2xl border border-zinc-200 px-4 py-2 text-sm"
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value as RoleFilter)}
          className="rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-sm"
        >
          <option value="ALL">Todos</option>
          <option value="ADMIN">Admins</option>
          <option value="USER">Utilizadores</option>
        </select>
        <div className="flex items-center justify-end text-xs text-zinc-500">
          {total} total
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <label className="text-xs text-zinc-500">
          Ordenar por
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="ml-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs"
          >
            <option value="createdAt_desc">Mais recentes</option>
            <option value="createdAt_asc">Mais antigos</option>
            <option value="name_asc">Nome A-Z</option>
            <option value="name_desc">Nome Z-A</option>
            <option value="email_asc">Email A-Z</option>
            <option value="email_desc">Email Z-A</option>
          </select>
        </label>
      </div>
      <div className="mt-6 space-y-4">
        {users.length === 0 ? (
          <p className="text-sm text-zinc-500">Sem utilizadores.</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
            >
              <div className="flex-1">
                <p className="text-sm font-semibold text-zinc-900">
                  {user.name}
                </p>
                <p className="text-xs text-zinc-500">{user.email}</p>
                <p className="text-xs text-zinc-500">
                  {user.phoneNumber ?? "Sem telefone"}
                </p>
                <p className="text-[11px] text-zinc-400">{user.role}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onEditUser(user)}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs hover:bg-zinc-100"
                >
                  Editar
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => handleDelete(user.id)}
                  className="rounded-full border border-red-200 px-3 py-1 text-xs text-red-600 hover:bg-red-50 disabled:opacity-50"
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="rounded-full border border-zinc-200 px-4 py-1.5 text-xs hover:bg-zinc-100 disabled:opacity-50"
        >
          Anterior
        </button>
        <span className="text-xs text-zinc-500">
          Página {page} de {totalPages}
        </span>
        <button
          type="button"
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page >= totalPages}
          className="rounded-full border border-zinc-200 px-4 py-1.5 text-xs hover:bg-zinc-100 disabled:opacity-50"
        >
          Seguinte
        </button>
      </div>
    </section>
  );
};

export default UsersSection;
