// React
import React from "react";
// Styled Components
import { PortfolioItemContainer, Backdrop, PortfolioImg, ProjectTitle, ProjectSubtitle } from "./styles";

export const PortfolioItem = ({ data }) => {
	const { title, subtitle, imgUrl, linkUrl } = data;

	return (
		<PortfolioItemContainer>
			<a href={linkUrl}>
				<PortfolioImg src={imgUrl} alt={title} />
				<Backdrop>
					<ProjectTitle element="h3" size={6} variant="heading">
						{title}
					</ProjectTitle>
					<ProjectSubtitle element="p" size={4} variant="sans">
						{subtitle}
					</ProjectSubtitle>
				</Backdrop>
			</a>
		</PortfolioItemContainer>
	);
};

export default PortfolioItem;
