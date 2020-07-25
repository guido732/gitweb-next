// React
import React from "react";
// Styled components
import { StyledElement } from "./styles";

const Typography = ({ element = "p", size = 4, variant = "sans", children, ...rest }) => {
	return (
		<StyledElement as={element} size={size} variant={variant} {...rest}>
			{children}
		</StyledElement>
	);
};

export default Typography;
