// React
import React, { FC } from "react";
// Styled Components
import { StyledButton } from "./styles";
// Types
import { IButtonTypes } from "./types";

export const Button: FC<IButtonTypes> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
