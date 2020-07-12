//Styled Components
import styled, { css } from "styled-components";
// Components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const PortfolioImg = styled.img`
	width: 100%;
	display: block;
	transform: scale(1);
	transition: transform 0.5s ease, filter 0.5s ease;
`;

export const Backdrop = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	color: white;
	/* HEX opacity reference https://stackoverflow.com/questions/7015302/css-hexadecimal-rgba */
	background: ${`${theme.colors.highlight}D8`};
	padding: ${theme.spacing[6]};
	opacity: 0;
	transition: opacity 0.5s ease, transform 0.5s ease;
`;

export const ProjectTitle = styled(Typography)`
	margin-bottom: ${theme.spacing[1]};
`;

export const ProjectSubtitle = styled(Typography)`
	font-style: oblique;
`;

export const PortfolioItemContainer = styled.div`
	width: 100%;
	align-self: center;
	justify-self: center;
	text-align: center;
	position: relative;
	overflow: hidden;
	&:hover ${Backdrop} {
		opacity: 1;
		transform: scale(1);
	}
	&:hover ${PortfolioImg} {
		transform: scale(1.1);
		filter: blur(2px);
	}
`;
