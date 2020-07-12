// Styled components
import styled, { css } from "styled-components";
// Utils
import { theme } from "styles/theme";

export const StyledButton = styled.button`
	display: inline-block;
	padding: ${theme.spacing[4]} ${theme.spacing[6]};
	background-color: ${theme.colors.textDark};
	color: white;
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
	text-transform: uppercase;
	border: none;
	transition: background-color 0.3s ease;
	cursor: pointer;
	&:hover {
		background-color: ${theme.colors.highlight};
		color: white;
	}
`;
