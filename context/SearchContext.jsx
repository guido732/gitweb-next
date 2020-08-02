import { useReducer, useContext, createContext } from "react";

const SearchStateContext = createContext();
const SearchDispatchContext = createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "CLEAR":
			return "";
		case "FILTER":
			return action.payload;
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

export const SearchProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, "");

	return (
		<SearchDispatchContext.Provider value={dispatch}>
			<SearchStateContext.Provider value={state}>{children}</SearchStateContext.Provider>
		</SearchDispatchContext.Provider>
	);
};

export const useSearch = () => useContext(SearchStateContext);
export const useDispatchSearch = () => useContext(SearchDispatchContext);
