// React
import React from "react";
// Custom Components
import Typography from "components/Typography/index";
// Icons
import { GitHub, Codepen, Linkedin, Phone } from "react-feather";
// Styles
import { StyledFooter, TopContainer, Separator, BottomContainer, Copyright, MediaContainer, Media } from "./styles";

export const Footer = () => {
	return (
		<StyledFooter>
			<TopContainer>{/* Main footer content */}</TopContainer>
			<Separator horizontal />
			<BottomContainer>
				<Copyright element="p" size="3" variant="sans">
					Diseño por GTD - 2020. Todos los derechos reservados
				</Copyright>
				<MediaContainer>
					<Media>
						<GitHub />
					</Media>
					<Media>
						<Codepen />
					</Media>
					<Media>
						<Linkedin />
					</Media>
					<Media>
						<Phone />
					</Media>
				</MediaContainer>
			</BottomContainer>
		</StyledFooter>
	);
};

export default Footer;
