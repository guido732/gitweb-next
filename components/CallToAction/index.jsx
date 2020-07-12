// React
import React from "react";
// Custom Components
// Styles
import { StyledCta, CtaContent } from "./styles";
import Link from "next/link";

export const CallToAction = () => {
	return (
		<StyledCta>
			<CtaContent>
				<div>
					Demo Text<span>separador</span>
				</div>
				<div>Body Text</div>
				<Link href="">
					<a>link como botón</a>
				</Link>
			</CtaContent>
		</StyledCta>
	);
};

export default CallToAction;
