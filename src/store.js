import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import userListData from './components/UserList/reducer';
import authData from './components/LoginPage/reducer';

const initialState = {};

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const rootReducer = combineReducers({
  userListData,
  authData
});

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
