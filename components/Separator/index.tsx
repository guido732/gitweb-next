// React
import React, { FC } from "react";
// Styled components
import { SeparatorContainer } from "./styles";
// Types
import { ISeparator } from "./types";

export const Separator: FC<ISeparator> = ({ direction, color, size, children, ...rest }) => {
	return (
		<SeparatorContainer direction={direction} color={color} size={size} {...rest}>
			{children}
		</SeparatorContainer>
	);
};

export default Separator;
