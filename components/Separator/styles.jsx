// Styled Components
import styled, { css } from "styled-components";
// Styles
import { theme } from "styles/theme";

const horizontalStyles = css`
	border-bottom-style: solid;
`;

const verticalStyles = css`
	border-right-style: solid;
`;

const getDirectionStyles = ({ direction }) => {
	switch (direction) {
		case "horizontal":
			return horizontalStyles;
		case "vertical":
			return verticalStyles;
		default:
			return horizontalStyles;
	}
};

export const SeparatorContainer = styled.div`
	width: 100%;
	${getDirectionStyles};
	border-color: ${({ color }) => theme.colors[color] || theme.colors.highlight};
	border-width: ${({ size }) => theme.spacing[size] || "2px"};
`;
