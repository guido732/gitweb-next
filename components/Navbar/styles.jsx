// Styled Comps
import styled, { css } from "styled-components";
// Next
import Link from "next/link";
// Utils
import { CenteredContent } from "styles/utilities";

export const StyledNavbar = styled.nav`
	/* ${CenteredContent} */
	display: flex;
	justify-content: space-between;
`;

export const BrandContainer = styled.div`
	/* display: block; */
`;

export const StyledLink = styled.a`
	/* color: inherit; */
`;
