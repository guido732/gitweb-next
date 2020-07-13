// React
import React, { useState } from "react";
// Styled components
import { FilterContainer, StyledInput, FilterText } from "./styles";

export const Filter = ({ data, onFilter }) => {
	const [search, setSearch] = useState("");

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearch(value);
		if (value) {
			const filteredData = data.filter((element) => {
				return element.tags.some((el) => RegExp(value).test(el));
			});
			onFilter(filteredData);
		} else {
			onFilter(data);
		}
	};

	return (
		<FilterContainer>
			<FilterText element="p" variant="heading" size={5}>
				Filtrar proyectos por tecnología
			</FilterText>
			<StyledInput value={search} onChange={handleSearch} />
		</FilterContainer>
	);
};

export default Filter;
