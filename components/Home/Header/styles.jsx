// Styled Comps
import styled from "styled-components";

// Components
import Typography from "components/Typography/index";
// Utils
import { theme } from "styles/theme";

export const HeaderContainer = styled.header`
	margin-bottom: ${theme.spacing[8]};
`;

export const StyledHeader = styled(Typography)`
	margin-bottom: ${theme.spacing[2]};
`;

export const StyledSubHeader = styled(Typography)`
	color: ${theme.colors.highlight};
`;

export const StyledLink = styled.a`
	border-bottom: 1px solid ${theme.colors.highlight};
	transition: filter 0.25s ease;
	&:hover {
		filter: grayscale(20%);
	}
`;
