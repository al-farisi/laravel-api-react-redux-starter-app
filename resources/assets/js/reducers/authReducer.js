import {LOG_IN_SUCCESS, LOG_OUT_SUCCESS, LOG_IN_FAILED} from '../authComponents/actionTypes';
import { browserHistory } from 'react-router-dom';
import { isEmpty } from 'underscore';

const initialState = {
	isAuthenticated: false,
	user: {},
	errors: ''
}

export default (state = initialState, action = {}) => {
	switch(action.type) {
		case LOG_IN_SUCCESS:
			return {
				isAuthenticated: !isEmpty(action.user),
				user: action.user
			}
		case LOG_OUT_SUCCESS:
			return {
				isAuthenticated: false,
				user: null
			}
		case LOG_IN_FAILED:
			return {
				errors: action.error,
				isAuthenticated: false,
				user: null
			}

		default: return state;
	}
}
