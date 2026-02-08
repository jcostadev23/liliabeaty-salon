import { useCallback, useEffect } from "react";
import { RoleFilter } from "@/app/types";
import { useUsersContext } from "@/contexts/UsersContext";

export function useUsersFilter() {
  const { state, dispatch, loadUsers } = useUsersContext();

  useEffect(() => {
    loadUsers();
  }, [state.search, state.roleFilter, state.order, state.page, loadUsers]);

  const setSearch = useCallback(
    (search: string) => {
      dispatch({ type: "SET_SEARCH", payload: search });
    },
    [dispatch],
  );

  const setRoleFilter = useCallback(
    (role: RoleFilter) => {
      dispatch({ type: "SET_ROLE_FILTER", payload: role });
    },
    [dispatch],
  );

  const setOrder = useCallback(
    (order: string) => {
      dispatch({ type: "SET_ORDER", payload: order });
    },
    [dispatch],
  );

  const setPage = useCallback(
    (page: number) => {
      dispatch({ type: "SET_PAGE", payload: page });
    },
    [dispatch],
  );

  const refresh = useCallback(() => {
    loadUsers();
  }, [loadUsers]);

  const totalPages = Math.max(1, Math.ceil(state.total / state.pageSize));

  return {
    users: state.users,
    total: state.total,
    page: state.page,
    pageSize: state.pageSize,
    roleFilter: state.roleFilter,
    search: state.search,
    order: state.order,
    loading: state.loading,
    status: state.status,
    totalPages,
    setSearch,
    setRoleFilter,
    setOrder,
    setPage,
    refresh,
  };
}
