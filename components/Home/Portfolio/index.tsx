// React
import React, { useState } from "react";
// Next
import Router from "next/router";
// Components
import Button from "components/Button";
import PortfolioItem from "components/Home/PortfolioItem";
import Filter from "components/Home/Filter";
// Styles
import { PortfolioContainer, Subtitle, PortfolioGrid } from "./styles";
// Utils
import { data as inputData } from "./data";

export const Portfolio = () => {
	const handleClick = (e: React.MouseEvent<unknown>) => {
		e.preventDefault();
		Router.push("/about");
	};

	const [filteredData, setFilteredData] = useState([...inputData]);

	return (
		<PortfolioContainer>
			<Filter onFilter={setFilteredData} data={inputData} />
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
