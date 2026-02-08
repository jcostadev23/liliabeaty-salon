"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useReducer,
  useContext,
} from "react";
import { User, StatusMessage, RoleFilter, UsersResponse } from "@/app/types";
import { fetchUsers } from "@/app/utils/users";

export interface UsersState {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
  roleFilter: RoleFilter;
  search: string;
  order: string;
  loading: boolean;
  status: StatusMessage | null;
  editingId: string | null;
}

type UsersAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_USERS"; payload: User[] }
  | { type: "SET_TOTAL"; payload: number }
  | { type: "SET_PAGE"; payload: number }
  | { type: "SET_ROLE_FILTER"; payload: RoleFilter }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_ORDER"; payload: string }
  | { type: "SET_STATUS"; payload: StatusMessage | null }
  | { type: "SET_EDITING_ID"; payload: string | null }
  | { type: "RESET"; payload: UsersState };

const initialState: UsersState = {
  users: [],
  total: 0,
  page: 1,
  pageSize: 10,
  roleFilter: "ALL",
  search: "",
  order: "createdAt_desc",
  loading: false,
  status: null,
  editingId: null,
};

function usersReducer(state: UsersState, action: UsersAction): UsersState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_ROLE_FILTER":
      return { ...state, roleFilter: action.payload, page: 1 };
    case "SET_SEARCH":
      return { ...state, search: action.payload, page: 1 };
    case "SET_ORDER":
      return { ...state, order: action.payload, page: 1 };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_EDITING_ID":
      return { ...state, editingId: action.payload };
    case "RESET":
      return action.payload;
    default:
      return state;
  }
}

export interface UsersContextType {
  state: UsersState;
  dispatch: React.Dispatch<UsersAction>;
  loadUsers: () => Promise<void>;
  deleteUser: (id: string) => Promise<void>;
  clearStatus: () => void;
}

export const UsersContext = createContext<UsersContextType | undefined>(
  undefined,
);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const loadUsers = useCallback(async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "SET_STATUS", payload: null });

    try {
      const params = new URLSearchParams();
      if (state.search) {
        params.set("search", state.search);
      }
      if (state.roleFilter !== "ALL") {
        params.set("role", state.roleFilter);
      }
      params.set("order", state.order);
      params.set("page", String(state.page));
      params.set("pageSize", String(state.pageSize));

      const response = (await fetchUsers(params.toString())) as UsersResponse;

      if (response.type === "error") {
        dispatch({
          type: "SET_STATUS",
          payload: {
            type: "error",
            message: response.message ?? "Erro ao carregar utilizadores.",
          },
        });
        return;
      }

      dispatch({ type: "SET_USERS", payload: response.users ?? [] });
      dispatch({ type: "SET_TOTAL", payload: response.total ?? 0 });
    } catch {
      dispatch({
        type: "SET_STATUS",
        payload: {
          type: "error",
          message: "Nao foi possivel carregar utilizadores.",
        },
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [state.search, state.roleFilter, state.order, state.page, state.pageSize]);

  const deleteUser = useCallback(
    async (id: string) => {
      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_STATUS", payload: null });

      try {
        const response = await fetch(`/api/users/${id}`, { method: "DELETE" });

        if (!response.ok) {
          const data = (await response.json()) as { message?: string };
          dispatch({
            type: "SET_STATUS",
            payload: {
              type: "error",
              message: data.message ?? "Erro ao remover utilizador.",
            },
          });
          return;
        }

        dispatch({
          type: "SET_STATUS",
          payload: { type: "success", message: "Utilizador removido." },
        });
        await loadUsers();
      } catch {
        dispatch({
          type: "SET_STATUS",
          payload: {
            type: "error",
            message: "Nao foi possivel remover utilizador.",
          },
        });
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    },
    [loadUsers],
  );

  const clearStatus = useCallback(() => {
    dispatch({ type: "SET_STATUS", payload: null });
  }, []);

  const value: UsersContextType = {
    state,
    dispatch,
    loadUsers,
    deleteUser,
    clearStatus,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
}

export function useUsersContext() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsersContext must be used within UsersProvider");
  }
  return context;
}
