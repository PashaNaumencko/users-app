import * as services from '../../services';
import { fetchUsers, SHOW_EXPANDED_USER, HIDE_EXPANDED_USER } from '../../routines';

export const fetchUsersRequest = (page = 1) => async (dispatch) => {
  try {
    dispatch(fetchUsers.request());
    const { page: currentPage, total_pages: totalPages, data: users } = await services.getUsers({ page });
    dispatch(fetchUsers.success({ currentPage, totalPages, users }));
  } catch (error) {
    dispatch(fetchUsers.failure(error.message));
  }
  dispatch(fetchUsers.fulfill());
};

export const showExpandedUser = (user) => ({
  type: SHOW_EXPANDED_USER,
  payload: user
});

export const hideExpandedUser = () => ({
  type: HIDE_EXPANDED_USER,
  payload: null
});
