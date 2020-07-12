// React
import React from "react";
// Styled Components
import { PortfolioItemContainer } from "./styles";

export const PortfolioItem = ({ data }) => {
	const { title, subtitle, imgUrl } = data;

	return (
		<PortfolioItemContainer>
			<img src={imgUrl} alt={title} />
		</PortfolioItemContainer>
	);
};

export default PortfolioItem;
