//Styled Components
import styled from "styled-components";
// Utils
import { theme } from "styles/theme";

export const StyledSkill = styled.div`
	display: flex;
	flex: 0 1 175px;
	align-items: center;
	justify-content: ${({ textOnly }) => (textOnly ? "center" : "flex-end")};
	flex-flow: column nowrap;
	margin: 0 ${theme.spacing[2]};
	margin-bottom: ${theme.spacing[4]};
	padding: ${theme.spacing[7]} ${theme.spacing[4]};
	background-color: ${theme.colors.secondary};
	text-align: center;
	transition: color 0.2s ease;
	&:hover,
	&:focus {
		color: ${theme.colors.highlight};
	}
	svg {
		width: ${theme.spacing[9]};
		height: auto;
		margin-bottom: ${theme.spacing[4]};
		transition: filter 0.2s ease;
		filter: grayscale(1);
	}
	&:hover svg,
	&:focus svg {
		filter: grayscale(0);
	}
`;
