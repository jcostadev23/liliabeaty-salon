import { useState, useCallback } from "react";
import { FormState, StatusMessage, User } from "@/app/types";

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  role: "USER",
};

export function useUserForm(onSuccess?: () => void) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [editing, setEditing] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<StatusMessage | null>(null);

  const handleChange = useCallback((key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setForm(EMPTY_FORM);
    setEditing(null);
    setStatus(null);
  }, []);

  const loadUserForEdit = useCallback((user: User) => {
    setEditing(user);
    setForm({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber ?? "",
      password: "",
      role: user.role,
    });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus(null);
      setLoading(true);

      try {
        const payload = {
          name: form.name,
          email: form.email,
          phoneNumber: form.phoneNumber,
          password: form.password || undefined,
          role: form.role,
        };

        const response = await fetch(
          editing ? `/api/users/${editing.id}` : "/api/users",
          {
            method: editing ? "PATCH" : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        if (!response.ok) {
          const data = (await response.json()) as { message?: string };
          setStatus({
            type: "error",
            message: data.message ?? "Erro ao guardar utilizador.",
          });
          return;
        }

        setStatus({
          type: "success",
          message: editing
            ? "Utilizador atualizado com sucesso."
            : "Utilizador criado com sucesso.",
        });
        resetForm();
        if (onSuccess) onSuccess();
      } catch {
        setStatus({
          type: "error",
          message: "Nao foi possivel guardar utilizador.",
        });
      } finally {
        setLoading(false);
      }
    },
    [form, editing, onSuccess, resetForm],
  );

  return {
    form,
    editing,
    loading,
    status,
    handleChange,
    resetForm,
    loadUserForEdit,
    handleSubmit,
    setStatus,
  };
}
