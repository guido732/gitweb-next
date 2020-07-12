// React
import React from "react";
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

	return (
		<PortfolioContainer>
			<div>filter section</div>
			<PortfolioGrid>
				{data.map((item) => (
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
