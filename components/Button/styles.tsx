// Styled components
import styled from "styled-components";
// Utils
import { theme } from "styles/theme";

export const StyledButton = styled.button`
	display: inline-block;
	padding: ${theme.spacing[4]} ${theme.spacing[6]};
	background-color: ${theme.colors.textDark};
	color: ${theme.colors.main};
	font-weight: 700;
	font-family: "Montserrat", sans-serif;
	text-transform: uppercase;
	border: none;
	transition: background-color 0.3s ease;
	cursor: pointer;
	&:hover,
	&:focus {
		background-color: ${theme.colors.highlight};
		color: ${theme.colors.main};
	}
`;
