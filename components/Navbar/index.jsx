// React
import React from "react";
import Link from "next/link";
// Styled components
import { StyledNavbar, NavbarWrapper, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/routes";
// Hooks
import { useWindowSize } from "custom_hooks/useWindowSize";

const Navbar = () => {
	console.log(useWindowSize());
	return (
		<StyledNavbar>
			<NavbarWrapper>
				<BrandContainer>
					<img src="img/logo.svg" alt="Logo" />
				</BrandContainer>
				<div>
					{routes.map((route) => (
						<Link key={route.path} href={route.path}>
							<StyledLink>{route.label}</StyledLink>
						</Link>
					))}
				</div>
			</NavbarWrapper>
		</StyledNavbar>
	);
};

export default Navbar;
