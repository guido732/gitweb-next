// React
import React, { useState, useEffect } from "react";
import Link from "next/link";
// Styled components
import { StyledNavbar, NavbarWrapper, BrandContainer, StyledLink } from "./styles";
// Utils
import { routes } from "constants/routes";
import { getBreakpoint } from "utils/getBreakpoint";

const Navbar = () => {
	const isMobile = getBreakpoint() === "xs";

	return (
		<StyledNavbar>
			<NavbarWrapper>
				<BrandContainer>
					<img src="img/logo.svg" alt="Logo" />
				</BrandContainer>
				{isMobile ? (
					<div>pantalla chica</div>
				) : (
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
