// React
import React from "react";
import Link from "next/link";
// Styled components
import { StyledNavbar, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/routes";

const Navbar = () => (
	<StyledNavbar>
		<img src="img/logo.svg" alt="" />
		<BrandContainer></BrandContainer>
		{routes.map((route) => (
			<Link key={route.path} href={route.path}>
				<StyledLink>{route.label}</StyledLink>
			</Link>
		))}
	</StyledNavbar>
);

export default Navbar;
