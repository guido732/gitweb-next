// React
import React from "react";
// Next
import Link from "next/link";
// Styles
import { HeaderContainer, StyledSubHeader, StyledHeader, StyledLink } from "./styles";

export const Header = () => (
	<HeaderContainer>
		<StyledHeader element="h1" size={9} variant="heading">
			Hola! Soy Guido. <br />
			Desarrollador Frontend
		</StyledHeader>
		<StyledSubHeader element="p" size={6} variant="serif">
			<Link href="/contact">
				<StyledLink>Conoceme</StyledLink>
			</Link>{" "}
			a mí, y más acerca de mi trabajo.
		</StyledSubHeader>
	</HeaderContainer>
);

export default Header;
