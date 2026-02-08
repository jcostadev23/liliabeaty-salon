export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber: string | null;
  role: "ADMIN" | "USER";
  createdAt: string;
  updatedAt: string;
}

export type FormState = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  role: "ADMIN" | "USER";
};

export type StatusMessage = {
  type: "success" | "error";
  message: string;
};

export type RoleFilter = "ALL" | "ADMIN" | "USER";

export type UsersResponse = {
  type: "success" | "error";
  users?: User[];
  total?: number;
  page?: number;
  pageSize?: number;
  message?: string;
};
