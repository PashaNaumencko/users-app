import { login, SET_AUTH, LOG_OUT } from '../../routines/index';

const initialState = {
  loading: false,
  error: null,
  isAuthorized: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case login.REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case login.SUCCESS:
    case SET_AUTH:
      return {
        ...state,
        isAuthorized: true
      };
    case login.FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case login.FULFILL:
      return {
        ...state,
        loading: false
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthorized: false
      };
    default:
      return state;
  }
};
