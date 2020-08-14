import { useReducer, useContext, createContext, Dispatch } from "react";

const SearchStateContext = createContext("");
const SearchDispatchContext = createContext({} as Dispatch<ActionTypes>);

export const useSearch = () => useContext(SearchStateContext);
export const useDispatchSearch = () => useContext(SearchDispatchContext);

interface ActionTypes {
	payload: string;
	type: string;
}

const reducer = ({}, action: ActionTypes) => {
	switch (action.type) {
		case "CLEAR":
			return "";
		case "FILTER":
			return action.payload;
		default:
			throw new Error(`Unknown action: ${action.type}`);
	}
};

export const SearchProvider = ({ children }: { children: any }) => {
	const [state, dispatch] = useReducer(reducer, "");
	return (
		<SearchDispatchContext.Provider value={dispatch}>
			<SearchStateContext.Provider value={state}>{children}</SearchStateContext.Provider>
		</SearchDispatchContext.Provider>
	);
};
