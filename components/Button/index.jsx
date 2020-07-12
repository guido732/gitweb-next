// React
import React from "react";
// Styled Components
import { StyledButton } from "./styles";

export const Button = ({ children, className, ...rest }) => {
	return (
		<StyledButton className={className} {...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;
