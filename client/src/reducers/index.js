import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

// Export reducers
export default combineReducers({
  alert,
  auth
});
