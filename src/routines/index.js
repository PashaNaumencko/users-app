import { createRoutine } from 'redux-routines';

// routines contain action types and action creators
export const fetchUsers = createRoutine('FETCH_USERS');
export const login = createRoutine('LOGIN');

// only action types
export const SHOW_EXPANDED_USER = 'SHOW_EXPANDED_USER';
export const HIDE_EXPANDED_USER = 'HIDE_EXPANDED_USER';
export const SET_AUTH = 'SET_AUTH';
export const LOG_OUT = 'LOG_OUT';
