import { combineReducers } from 'redux';
import auth from './authReducer';
import modal from './modalReducer';
import account from './accountReducer';

const rootReducer = combineReducers({
	auth,
	modal,
	account
})

export default rootReducer;
