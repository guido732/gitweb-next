// React
import React from "react";
import Link from "next/link";
// Styled components
import { StyledNavbar, NavbarWrapper, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/routes";
import { isSM } from "custom_hooks/useRender";

const Navbar = () => {
	const isSmall = isSM();

	return (
		<StyledNavbar>
			<NavbarWrapper>
				<BrandContainer>
					<img src="img/logo.svg" alt="Logo" />
				</BrandContainer>
				{isSmall && (
					<div>
						{routes.map((route) => (
							<Link key={route.path} href={route.path}>
								<StyledLink>{route.label}</StyledLink>
							</Link>
						))}
					</div>
				)}
			</NavbarWrapper>
		</StyledNavbar>
	);
};

export default Navbar;
