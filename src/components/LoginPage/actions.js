import { NotificationManager } from 'react-notifications';
import * as services from '../../services';
import store from '../../store';
import { login, LOG_OUT, SET_AUTH } from '../../routines/index';

// check if the user is logged in
if (localStorage.getItem('token')) {
  store.dispatch({
    type: SET_AUTH
  });
}

export const logout = () => {
  localStorage.clear();
  return { type: LOG_OUT };
};

export const loginRequest = ({ email, password }) => async (dispatch) => {
  try {
    dispatch(login.request());
    const { token } = await services.login({ email, password });
    dispatch(login.success());
    localStorage.setItem('token', token);
    NotificationManager.success('You are successfully logged in');
  } catch ({ error }) {
    dispatch(login.failure(error));
  }
  dispatch(login.fulfill());
};
