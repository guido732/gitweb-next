// React
import React from "react";
// Next
import Link from "next/link";
// Components
import Button from "components/Button";
// Styles
import {
	StyledCta,
	CtaContent,
	HeaderContainer,
	StyledHeader,
	StyledSubHeader,
	StyledSeparator,
	StyledLink,
} from "./styles";

export const CallToAction = () => {
	return (
		<StyledCta>
			<CtaContent>
				<HeaderContainer>
					<StyledHeader element="h2" size={7} variant="heading">
						¿Te gustó lo que hago?
					</StyledHeader>
					<StyledSeparator direction="horizontal" size={1} />
				</HeaderContainer>
				<StyledSubHeader variant="sans">No dudes en contactarme!</StyledSubHeader>
				<Link href="/contact" passHref>
					<StyledLink>Contactame</StyledLink>
				</Link>
			</CtaContent>
		</StyledCta>
	);
};

export default CallToAction;
