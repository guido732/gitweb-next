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

const getDirectionStyles = (direction: string) => {
	switch (direction) {
		case "horizontal":
			return horizontalStyles;
		case "vertical":
			return verticalStyles;
		default:
			return horizontalStyles;
	}
};

interface SeparatorTypes {
	direction?: string;
	color?: string;
	size?: number;
}

export const SeparatorContainer = styled.div<SeparatorTypes>`
	width: 100%;
	border-color: ${({ color }) => (color ? theme.colors[color] : theme.colors.highlight)};
	border-width: ${({ size }) => (size ? theme.spacing[size] : "2px")};
	${({ direction }) => (direction ? getDirectionStyles(direction) : getDirectionStyles(""))};
`;
