// import React, { useReducer, createContext } from "react";

// import contextReducer from "./contextReducer";

// const initialState = JSON.parse(localStorage.getItem("transactions")) || [
// 	{
// 		amount: 100,
// 		category: "Savings",
// 		type: "Income",
// 		date: "2022-1-4",
// 		id: "037a35a3-40ec-4212-abe0-cc485a98aeee",
// 	},
// 	{
// 		amount: 123,
// 		category: "Car",
// 		type: "Expense",
// 		date: "2020-11-16",
// 		id: "0f72e66e-e144-4a72-bbc1-c3c92018635e",
// 	},
// 	{
// 		amount: 500,
// 		category: "Travel",
// 		type: "Expense",
// 		date: "2020-11-13",
// 		id: "365a4ebd-9892-4471-ad55-36077e4121a9",
// 	},
// 	{
// 		amount: 50,
// 		category: "Investments",
// 		type: "Income",
// 		date: "2020-11-23",
// 		id: "80cf7e33-fc3e-4f9f-a2aa-ecf140711460",
// 	},
// ];

// export const ExpenseTrackerContext = createContext(initialState);

// // eslint-disable-next-line react/prop-types
// export const Provider = ({ children }) => {
// 	const [transactions, dispatch] = useReducer(contextReducer, initialState);

// 	const deleteTransaction = (id) => {
// 		dispatch({ type: "DELETE_TRANSACTION", payload: id });
// 	};

// 	const addTransaction = (transaction) => {
// 		console.log("--tr", transaction);
// 		dispatch({ type: "ADD_TRANSACTION", payload: transaction });
// 	};

// 	const balance = transactions.reduce(
// 		(acc, currVal) =>
// 			currVal.type === "Expense"
// 				? acc - currVal.amount
// 				: acc + currVal.amount,
// 		0
// 	);

// 	return (
// 		<ExpenseTrackerContext.Provider
// 			value={{
// 				transactions,
// 				balance,
// 				deleteTransaction,
// 				addTransaction,
// 			}}
// 		>
// 			{children}
// 		</ExpenseTrackerContext.Provider>
// 	);
// };

// usint api call
import React, { useReducer, createContext, useEffect } from "react";
import contextReducer from "./contextReducer";
import axios from "axios";

export const ExpenseTrackerContext = createContext();

const initialState = {
	transactions: [], // Initialize transactions as an empty array
	loading: true,
	error: null,
};

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(contextReducer, initialState);

	useEffect(() => {
		dispatch({ type: "SET_LOADING" });

		axios
			.get("http://localhost:5000/tr")
			.then((response) => {
				dispatch({ type: "SET_INITIAL_STATE", payload: response.data });
			})
			.catch((error) => {
				dispatch({ type: "SET_ERROR", payload: error.message });
			})
			.finally(() => {
				dispatch({ type: "SET_LOADING", payload: false });
			});
	}, []);

	// const deleteTransaction = (id) => {
	// 	dispatch({ type: "DELETE_TRANSACTION", payload: id });
	// };

	const deleteTransaction = async (id) => {
		try {
			// Delete the transaction from the backend
			await axios.delete(`http://localhost:5000/tr/${id}`);

			// Dispatch the action to remove the transaction from the state
			dispatch({ type: "DELETE_TRANSACTION", payload: id });
		} catch (error) {
			console.error("Error deleting transaction:", error);
		}
	};
	// const addTransaction = (transaction) => {
	// 	dispatch({ type: "ADD_TRANSACTION", payload: transaction });
	// };

	const addTransaction = async (transaction) => {
		try {
			const response = await axios.post(
				"http://localhost:5000/tr",
				transaction
			);
			const newTransaction = response.data;

			// Dispatch the action to add the new transaction to the state
			dispatch({ type: "ADD_TRANSACTION", payload: newTransaction });
		} catch (error) {
			console.error("Error adding transaction:", error);
		}
	};

	const balance = state.transactions.reduce(
		(acc, currVal) =>
			currVal.type === "Expense"
				? acc - currVal.amount
				: acc + currVal.amount,
		0
	);

	return (
		<ExpenseTrackerContext.Provider
			value={{
				transactions: state.transactions,
				loading: state.loading,
				error: state.error,
				balance,
				addTransaction,
				deleteTransaction,
			}}
		>
			{children}
		</ExpenseTrackerContext.Provider>
	);
};
