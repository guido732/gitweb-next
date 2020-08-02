// React
import React, { useEffect } from "react";
// Context
import { useSearch, useDispatchSearch } from "context/SearchContext";
// Styled components
import { FilterContainer, StyledInput, FilterText } from "./styles";

export const Filter = ({ data, onFilter }) => {
	const searchTerm = useSearch();
	const dispatch = useDispatchSearch();

	useEffect(() => {
		if (searchTerm) {
			const filteredData = data.filter((element) => {
				return element.tags.some((el) => RegExp(searchTerm).test(el));
			});
			onFilter(filteredData);
		} else {
			onFilter(data);
		}
	}, [searchTerm, onFilter]);

	const handleSearch = (e) => {
		const { value } = e.target;
		dispatch({
			type: "FILTER",
			payload: value,
		});
	};

	return (
		<FilterContainer>
			<FilterText element="p" variant="heading" size={5}>
				Filtrar proyectos por tecnología
			</FilterText>
			<StyledInput value={searchTerm} onChange={handleSearch} />
		</FilterContainer>
	);
};

export default Filter;
