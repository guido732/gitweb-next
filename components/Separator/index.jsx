// React
import React from "react";
// Styled components
import { SeparatorContainer } from "./styles";

export const Separator = ({ direction, color, size, children, ...rest }) => {
	return (
		<SeparatorContainer direction={direction} color={color} size={size} {...rest}>
			{children}
		</SeparatorContainer>
	);
};

export default Separator;
