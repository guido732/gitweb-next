// React
import React, { useState } from "react";
// Next
import Link from "next/link";
import Router from "next/router";
// Styled components
import { StyledNavbar, NavbarWrapper, BrandLogo, LinkContainer, StyledLink, IconButton } from "./styles";
// Icons
import { Menu } from "react-feather";
// Utils
import { routes } from "constants/routes";
import { getBreakpoint } from "utils/getBreakpoint";

const Navbar = () => {
	const isMobile = getBreakpoint() === "xs";
	const handleRoute = (e, route) => {
		e.preventDefault();
		Router.push(route.path);
	};

	const [dropdownVisible, setDropdownVisible] = useState(false);

	const handleMenu = () => {
		setDropdownVisible(!dropdownVisible);
	};

	return (
		<StyledNavbar>
			<NavbarWrapper>
				<Link href="/">
					<a>
						<BrandLogo src="img/logo.svg" alt="Logo" />
					</a>
				</Link>
				{isMobile ? (
					<>
						<IconButton name="Menu" onClick={handleMenu}>
							<Menu />
						</IconButton>
						{dropdownVisible && <div>dropdown</div>}
					</>
				) : (
					<LinkContainer>
						{routes.map((route) => (
							<li key={route.path}>
								<StyledLink href={route.path} onClick={(e) => handleRoute(e, route)}>
									{route.label}
								</StyledLink>
							</li>
						))}
					</LinkContainer>
				)}
			</NavbarWrapper>
		</StyledNavbar>
	);
};

export default Navbar;
