// React
import React from "react";
// Styled components
import { StyledElement } from "./styles";

const Typography = ({ element, size, variant, children, ...rest }) => {
	return (
		<StyledElement as={element || "p"} size={size} variant={variant} {...rest}>
			{children}
		</StyledElement>
	);
};

export default Typography;
