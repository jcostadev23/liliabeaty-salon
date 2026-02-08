import { User } from "../types";

export const fetchUsers = async (params: string) => {
  try {
    const response = await fetch(`/api/users?${params}`);
    if (!response.ok) {
      const data = (await response.json()) as { message?: string };
      return {
        type: "error",
        message: data.message ?? "Nao foi possivel carregar os utilizadores.",
      };
    }

    const data = (await response.json()) as {
      type: "success";
      users: User[];
      total: number;
      page: number;
      pageSize: number;
    };
    return data;
  } catch {
    return {
      type: "error",
      message: "Nao foi possivel carregar os utilizadores.",
    };
  }
};
