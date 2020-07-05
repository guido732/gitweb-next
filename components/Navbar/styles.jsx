// Styled Comps
import styled, { css } from "styled-components";
// Utils
import { CenteredContent } from "styles/utilities";
import { theme } from "styles/theme";

export const StyledNavbar = styled.nav`
	background-color: ${theme.colors.grayLight};
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
	padding: 0 2rem;
	@media screen and (min-width: ${theme.breakpoints.lg}) {
		padding: 0;
	}
`;

export const BrandLogo = styled.img`
	width: 50px;
`;

export const DropdownContainer = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	height: 100vh;
	background: ${theme.colors.grayLight};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const VerticalList = css`
	flex-direction: column;
	margin-bottom: 5rem;
`;

export const LinkList = styled.ul`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	${({ isMobile }) => isMobile && VerticalList}
`;

export const StyledLink = styled.a`
	margin-left: ${theme.spacing[7]};
	${({ isMobile }) => isMobile && "margin-left: 0"}
`;

export const IconButton = styled.button`
	background-color: ${theme.colors.grayLight};
	border: none;
	color: ${theme.colors.textGray};
	border-radius: 50%;
	width: ${theme.spacing[8]};
	height: ${theme.spacing[8]};
	transition: box-shadow 0.25s ease, background-color 0.25s ease;
	cursor: pointer;
	&:hover {
		background-color: ${theme.colors.secondary};
		box-shadow: ${theme.shadows.main};
	}
`;
