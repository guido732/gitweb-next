// React
import React, { FC, useEffect } from "react";
// Context
import { useSearch, useDispatchSearch } from "context/SearchContext";
// Styled components
import { FilterContainer, StyledInput /* FilterText */ } from "./styles";
// Types
import { IFilter } from "./types";

export const Filter: FC<IFilter> = ({ data, onFilter }) => {
	const searchTerm = useSearch();
	const dispatch = useDispatchSearch();

	useEffect(() => {
		if (searchTerm) {
			const filteredData = data.filter((element) => {
				return element.tags.some((el) => RegExp(searchTerm, "i").test(el));
			});
			onFilter(filteredData);
		} else {
			onFilter(data);
		}
	}, [searchTerm, onFilter]);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		dispatch({
			type: "FILTER",
			payload: value,
		});
	};

	return (
		<FilterContainer>
			{/* <FilterText element="p" variant="heading" size={5}>
				Filtrar proyectos por tecnología
			</FilterText> */}
			<StyledInput
				value={searchTerm}
				onChange={handleSearch}
				placeholder="Ingresá un término para filtrar los proyectos"
			/>
		</FilterContainer>
	);
};

export default Filter;
