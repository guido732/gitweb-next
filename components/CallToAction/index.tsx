// React
import React from "react";
// Next
import Router from "next/router";
// Custom Components
import Button from "components/Button";
// Styles
import { StyledCta, CtaContent, HeaderContainer, StyledHeader, StyledSubHeader, StyledSeparator } from "./styles";

export const CallToAction = () => {
	const handleClick = (e: React.MouseEvent<unknown>) => {
		e.preventDefault();
		Router.push("/contact");
	};

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
				<Button as={"a"} href="/contact" onClick={handleClick}>
					Contactame
				</Button>
			</CtaContent>
		</StyledCta>
	);
};

export default CallToAction;
