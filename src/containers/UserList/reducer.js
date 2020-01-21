import { fetchUsers } from '../../routines/index';

const initialState = {
  users: [],
  currentPage: null,
  totalPages: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case fetchUsers.REQUEST:
      return {
        ...state,
        loading: true
      };
    case fetchUsers.SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages
      };
    case fetchUsers.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case fetchUsers.FULFILL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
