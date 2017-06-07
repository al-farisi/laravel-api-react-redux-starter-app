import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


window.axios = require('axios');


function getRefreshToken() {
	return axios({
		url : 'api/token',
		method: 'get',
		headers: {'Authorization' : `Bearer ${token}`}
	})
}

export const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);