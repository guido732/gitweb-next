// React
import React from "react";
import Link from "next/link";
// Styled components
import { StyledNavbar, NavbarWrapper, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/_routes";

const Navbar = () => (
	<StyledNavbar>
		<NavbarWrapper>
			<BrandContainer>
				<img src="img/logo.svg" alt="Logo" />
			</BrandContainer>
			{routes.map((route) => (
				<Link key={route.path} href={route.path}>
					<StyledLink>{route.label}</StyledLink>
				</Link>
			))}
		</NavbarWrapper>
	</StyledNavbar>
);

export default Navbar;
