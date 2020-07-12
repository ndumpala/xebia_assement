import { combineReducers } from 'redux';
import fetchLoginReducer from './fetchLoginReducer'
const rootReducer = combineReducers({
 tasks: fetchLoginReducer,
});
export default rootReducer;