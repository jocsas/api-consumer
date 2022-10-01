import { combineReducers } from 'redux';
import reducer from './auth/reducer';

export default combineReducers({
  auth: reducer,
});
