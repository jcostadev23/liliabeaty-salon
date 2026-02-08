"use client";

import { useMemo, useEffect } from "react";
import { useUserForm } from "@/hooks/useUserForm";
import { useUsersContext } from "@/contexts/UsersContext";
import { User } from "@/app/types";
import Label from "./Label";

interface UserFormProps {
  editingUser?: User | null;
  onReset?: () => void;
}

const UserForm = ({ editingUser, onReset }: UserFormProps) => {
  const { loadUsers } = useUsersContext();
  const {
    form,
    editing,
    loading,
    status,
    handleChange,
    resetForm,
    loadUserForEdit,
    handleSubmit,
  } = useUserForm(() => {
    loadUsers();
    onReset?.();
  });

  useEffect(() => {
    if (editingUser) {
      loadUserForEdit(editingUser);
    } else {
      resetForm();
    }
  }, [editingUser, loadUserForEdit, resetForm]);

  const passwordHint = useMemo(() => {
    if (!form.password) return "Deixa vazio para manter a atual.";
    return "Min 8 chars, 1 maiuscula, 1 minuscula, 1 numero, 1 simbolo.";
  }, [form.password]);

  return (
    <section className="rounded-3xl bg-white p-8 shadow-xl">
      <h2 className="text-lg font-semibold text-zinc-900">
        {editing ? "Editar utilizador" : "Novo utilizador"}
      </h2>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Name</Label>
          <input
            id="name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm"
            required
          />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm"
            required
          />
        </div>
        <div>
          <Label htmlFor="phoneNumber">PhoneNumber</Label>
          <input
            id="phoneNumber"
            value={form.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="role">Role</Label>
          <select
            id="role"
            value={form.role}
            onChange={(e) =>
              handleChange("role", e.target.value as FormState["role"])
            }
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm"
          >
            <option value="USER">Utilizador</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <input
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm"
            placeholder={editing ? "Nova password (opcional)" : "Password"}
            required={!editing}
          />
          <p className="mt-1 text-xs text-zinc-400">{passwordHint}</p>
        </div>
        {status ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status.type === "success"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {status.message}
          </div>
        ) : null}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-2xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-70"
          >
            {loading ? "A guardar..." : editing ? "Guardar" : "Criar"}
          </button>
          {editing ? (
            <button
              type="button"
              onClick={resetForm}
              className="rounded-2xl border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-900"
            >
              Cancelar
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
};

type FormState = import("@/app/types").FormState;

export default UserForm;
