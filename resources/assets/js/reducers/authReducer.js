import {LOG_IN_SUCCESS} from '../authComponents/actionTypes';
// import initialState from './initialState';
import { browserHistory } from 'react-router-dom';
import { isEmpty } from 'underscore';

const initialState = {
	isAuthenticated: false,
	user: {}
}

export default (state = initialState, action = {}) => {
	switch(action.type) {
		case LOG_IN_SUCCESS:
			return {
				isAuthenticated: !isEmpty(action.user),
				user: action.user
			}

		default: return state;
	}
}
