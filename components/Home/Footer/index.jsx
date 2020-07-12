// React
import React from "react";
// Icons
import { GitHub, Codepen, Linkedin, Phone } from "react-feather";
// Styles
import { StyledFooter, TopContainer, Separator, BottomContainer, Copyright, MediaContainer, Media } from "./styles";

export const Footer = () => {
	return (
		<StyledFooter>
			<TopContainer>
				<img src="public/img/logo-dark.svg" alt="Logo" />
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam id veniam tenetur animi suscipit?
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam id veniam tenetur animi suscipit?
				</div>
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis totam id veniam tenetur animi suscipit?
				</div>
			</TopContainer>
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
