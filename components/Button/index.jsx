// React
import React from "react";
// Styled Components
import { StyledButton } from "./styles";

export const Button = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
