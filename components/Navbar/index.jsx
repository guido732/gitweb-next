// React
import React from "react";
// Styled components
import { StyledNavbar, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/routes";

const Navbar = () => (
	<StyledNavbar>
		<BrandContainer>
			<img src="img/logo.svg" alt="" />
		</BrandContainer>
		{routes.map((route) => (
			<StyledLink key={route.path} href={route.path}>
				<a>{route.label}</a>
			</StyledLink>
		))}
	</StyledNavbar>
);

export default Navbar;
