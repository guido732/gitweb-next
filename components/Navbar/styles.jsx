// Styled Comps
import styled from "styled-components";
// Utils
import { CenteredContent } from "styles/utilities";
import { theme } from "styles/theme";

export const StyledNavbar = styled.nav`
	background-color: ${theme.colors.secondary};
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding: ${theme.spacing[2]} 0;
	box-shadow: ${theme.shadows.main};
`;

export const NavbarWrapper = styled.div`
	${CenteredContent}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const BrandContainer = styled.div`
	img {
		width: 50px;
	}
	/* display: block; */
`;

export const StyledLink = styled.a`
	/* color: inherit; */
`;
