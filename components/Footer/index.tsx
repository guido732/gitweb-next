// React
import React from "react";
// Next
import Link from "next/link";
// Icons
import { GitHub, Codepen, Linkedin, Send } from "react-feather";
// Styles
import {
	StyledFooter,
	TopContainer,
	BrandLogo,
	StyledLink,
	StyledHeader,
	StyledText,
	StyledSeparator,
	BottomContainer,
	Copyright,
	MediaContainer,
	Media,
} from "./styles";

export const Footer = () => {
	return (
		<StyledFooter>
			<TopContainer>
				<Link href="/" passHref={true}>
					<StyledLink>
						<BrandLogo src="img/logo-dark.svg" alt="Logo" />
					</StyledLink>
				</Link>
				<div>
					<Link href="/about" passHref={true}>
						<StyledLink>
							<StyledHeader element="h3" size={4} variant="heading">
								Acerca de mí
							</StyledHeader>
							<StyledText size={3} variant="sans">
								Desarrollador Frontend, curioso, autodidacta.
							</StyledText>
						</StyledLink>
					</Link>
				</div>
				<div>
					<Link /* href="/contact" */ href="" passHref={true}>
						<StyledLink>
							<StyledHeader element="h3" size={4} variant="heading">
								Información de contacto
							</StyledHeader>
						</StyledLink>
					</Link>
					<StyledText size={3} variant="sans">
						CABA, Argentina
					</StyledText>
					<StyledText size={3} variant="sans">
						contacto@guidotorres.com.ar
					</StyledText>
					<StyledText size={3} variant="sans">
						+54 9 11 5119 8411
					</StyledText>
				</div>
			</TopContainer>
			<StyledSeparator direction="horizontal" color="textGray" />
			<BottomContainer>
				<Copyright element="p" size={3} variant="sans">
					Diseño por GTD - 2020 - v{process.env.NEXT_PUBLIC_SEMVER}
				</Copyright>
				<MediaContainer>
					<Media href="https://github.com/guido732/" title="Github" target="_blank" rel="noopener noreferrer">
						<GitHub />
					</Media>
					<Media
						href="https://www.linkedin.com/in/g-torres/"
						title="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin />
					</Media>
					<Media href="https://codepen.io/guido732" title="Codepen" target="_blank" rel="noopener noreferrer">
						<Codepen />
					</Media>
					<Media href="https://t.me/guido732" title="Telegram" target="_blank" rel="noopener noreferrer">
						<Send />
					</Media>
				</MediaContainer>
			</BottomContainer>
		</StyledFooter>
	);
};

export default Footer;
