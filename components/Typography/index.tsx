// React
import React, { FC } from "react";
// Types
import { ITypography } from "./types";
// Styled components
import { StyledElement } from "./styles";

const Typography: FC<ITypography> = ({ element = "p", size = 4, variant = "sans", children, ...rest }) => {
	return (
		// @ts-ignore
		<StyledElement as={element} size={size} variant={variant} {...rest}>
			{children}
		</StyledElement>
	);
};

export default Typography;
