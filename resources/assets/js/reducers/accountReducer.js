

const initialState = {
	addresses: [],
	orders: []
}

export default (state = initialState, action = {}) => {
	switch(action.type) {
		case "GOT_ACCOUNT_DATA":
			return {
				addresses: action.account.addresses,
				orders: action.account.orders
			}

		default: return state;
	}
}
