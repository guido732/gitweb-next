// React
import React, { FC } from "react";
// Styled Components
import { PortfolioItemContainer, Backdrop, PortfolioImg, ProjectTitle, ProjectSubtitle } from "./styles";
// Types
import { IPortfolioItem } from "./types";

export const PortfolioItem: FC<IPortfolioItem> = ({ data }) => {
	const { title, subtitle, imgUrl, linkUrl } = data;

	return (
		<PortfolioItemContainer>
			<a href={linkUrl} target="_blank" rel="noopener noreferrer">
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
