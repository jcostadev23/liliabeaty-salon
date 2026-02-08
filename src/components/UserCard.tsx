import { User } from "@/app/types";

interface UserCardProps {
  user: User;
  onEditUser: (user: User) => void;
  handleDelete: (id: string) => void;
  loading: boolean;
}

const UserCard = ({
  user,
  onEditUser,
  handleDelete,
  loading,
}: UserCardProps) => {
  return (
    <div
      key={user.id}
      className="flex items-start justify-between gap-4 rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
    >
      <div className="flex-1">
        <p className="text-sm font-semibold text-zinc-900">{user.name}</p>
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
  );
};
export default UserCard;
