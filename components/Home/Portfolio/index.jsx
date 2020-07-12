// React
import React, { useState } from "react";
// Next
import Router from "next/router";
// Components
import Button from "components/Button";
import PortfolioItem from "../PortfolioItem";
// Styles
import { PortfolioContainer, Subtitle, PortfolioGrid } from "./styles";
// Utils
import { data } from "./data";

export const Portfolio = () => {
	const handleClick = (e) => {
		e.preventDefault();
		Router.push("/about");
	};

	const [search, setSearch] = useState("");
	const [filteredData, setFilteredData] = useState([...data]);

	const handleSearch = (e) => {
		const { value } = e.target;
		setSearch(value);
		if (value) {
			const filteredData = data.filter((element) => {
				return element.tags.some((el) => RegExp(value).test(el));
			});
			setFilteredData(filteredData);
		} else {
			setFilteredData(data);
		}
	};
	console.log(filteredData);

	return (
		<PortfolioContainer>
			<input value={search} onChange={handleSearch} />
			<PortfolioGrid>
				{filteredData.map((item) => (
					<PortfolioItem key={item.id} data={item} />
				))}
			</PortfolioGrid>
			<Subtitle element="p" size={4} variant="heading">
				conocé más acerca de mí y cómo trabajo
			</Subtitle>
			<Button as="a" href="/about" onClick={handleClick}>
				Acerca de mi
			</Button>
		</PortfolioContainer>
	);
};

export default Portfolio;
