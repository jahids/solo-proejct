// //logic after doing that action like how chaning old state to new

// const contextReducer = (state, action) => {
// 	let transactions;

// 	switch (action.type) {
// 		case "SET_INITIAL_STATE":
// 			return action.payload;

// 		case "DELETE_TRANSACTION":
// 			transactions = state.filter((t) => t.id !== action.payload);
// 			localStorage.setItem("transactions", JSON.stringify(transactions));
// 			return transactions;

// 		case "ADD_TRANSACTION":
// 			transactions = [action.payload, ...state];
// 			localStorage.setItem("transactions", JSON.stringify(transactions));
// 			return transactions;
// 		default:
// 			return state;
// 	}
// };

// export default contextReducer;

// updated reducer

const contextReducer = (state, action) => {
	let transactions;

	switch (action.type) {
		case "SET_LOADING":
			return { ...state, loading: action.payload };

		case "SET_ERROR":
			return { ...state, error: action.payload };

		case "SET_INITIAL_STATE":
			return { ...state, transactions: action.payload };

		case "DELETE_TRANSACTION":
			transactions = state.transactions.filter(
				(t) => t._id !== action.payload
			);
			return { ...state, transactions };

		case "ADD_TRANSACTION":
			transactions = [action.payload, ...state.transactions];
			// localStorage.setItem("transactions", JSON.stringify(transactions));
			return { ...state, transactions };

		default:
			return state;
	}
};

export default contextReducer;
