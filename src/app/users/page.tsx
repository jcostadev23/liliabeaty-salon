"use client";

import { useState } from "react";
import UserForm from "@/components/UserForm";
import UsersSection from "@/components/UsersSection";
import { UsersProvider } from "@/contexts/UsersContext";
import { User } from "@/app/types";

function UsersPageContent() {
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleReset = () => {
    setEditingUser(null);
  };

  return (
    <div className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Lilia Beauty Salon
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900">
            Gestão de utilizadores
          </h1>
          <p className="text-base text-zinc-600">
            Cria, edita ou remove utilizadores da equipa.
          </p>
        </header>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <UserForm editingUser={editingUser} onReset={handleReset} />
          <UsersSection onEditUser={setEditingUser} />
        </div>
      </div>
    </div>
  );
}

export default function UsersPage() {
  return (
    <UsersProvider>
      <UsersPageContent />
    </UsersProvider>
  );
}
