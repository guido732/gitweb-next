// React
import React, { useState } from "react";
// Next
import Link from "next/link";
import Router from "next/router";
// Components
import Typography from "components/Typography";
// Styled components
import {
	StyledNavbar,
	NavbarWrapper,
	BrandLogo,
	LinkList,
	LinkListItem,
	StyledLink,
	IconButton,
	DropdownContainer,
} from "./styles";

// RTG
// import { CSSTransition } from "react-transition-group";
// https://dev.to/terrierscript/styled-component--react-transition-group--very-simple-transition-jja
// https://stackoverflow.com/questions/42660907/using-reactcsstransitiongroup-with-styled-component
// Icons
import { Menu } from "react-feather";
// Utils
import { routes, IRoutes } from "constants/routes";
import { getBreakpoint } from "utils/getBreakpoint";

const Navbar = () => {
	// Detects viewport size and detemines if mobile breakpoint is on
	const isMobile: boolean = getBreakpoint() === "xs";

	// Handles route pushing for nav links
	const handleRoute = (e: React.MouseEvent<unknown>, route: IRoutes) => {
		e.preventDefault();
		Router.push(route.path);
	};

	// Dropdown Visibility
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
						{dropdownVisible && (
							<DropdownContainer>
								<LinkList>
									{routes.map((route) => (
										<LinkListItem key={route.path}>
											<StyledLink href={route.path} onClick={(e) => handleRoute(e, route)}>
												<Typography size={7} variant="heading" element="span">
													{route.label}
												</Typography>
											</StyledLink>
										</LinkListItem>
									))}
								</LinkList>
							</DropdownContainer>
						)}
					</>
				) : (
					<LinkList>
						{routes.map((route) => (
							<LinkListItem key={route.path}>
								<StyledLink href={route.path} onClick={(e) => handleRoute(e, route)}>
									<Typography size={4} variant="heading" element="span">
										{route.label}
									</Typography>
								</StyledLink>
							</LinkListItem>
						))}
					</LinkList>
				)}
			</NavbarWrapper>
		</StyledNavbar>
	);
};

export default Navbar;
