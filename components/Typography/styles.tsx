// Styled Comps
import styled, { css } from "styled-components";
// Utils
import { theme } from "styles/theme";
// Types
import { IStyledElement } from "./types";

export const fontHeadings = css`
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
`;

export const fontSerif = css`
	font-family: "Playfair Display", serif;
	font-weight: 500;
`;

export const fontSans = css`
	font-family: "Source Sans Pro", sans-serif;
	font-weight: 300;
`;

const getFontStyle = ({ variant }: { variant: string }) => {
	switch (variant) {
		case "heading":
			return fontHeadings;
		case "serif":
			return fontSerif;
		case "sans":
			return fontSans;
		default:
			return fontSans;
	}
};

const getFontSize = ({ size }: { size: number }) => {
	return theme.spacing[size];
};

export const StyledElement = styled.div<IStyledElement>`
	font-size: ${getFontSize};
	${getFontStyle};
`;
