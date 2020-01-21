import * as services from '../../services';
import { fetchUsers } from '../../routines';

export const fetchUsersRequest = (page = 1) => async (dispatch) => {
  try {
    console.log(page);
    dispatch(fetchUsers.request());
    console.log(page);
    const { page: currentPage, total_pages: totalPages, data: users } = await services.getUsers({ page });
    console.log({ currentPage, totalPages, users });
    dispatch(fetchUsers.success({ currentPage, totalPages, users }));
  } catch (error) {
    dispatch(fetchUsers.failure(error.message));
  }
  dispatch(fetchUsers.fulfill());
};
