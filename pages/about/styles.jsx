//Styled Components
import styled, { css } from "styled-components";
// Custom Components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100;
	margin-bottom: ${theme.spacing[8]};
`;

export const ImageContainer = styled.div`
	flex: 1 1 50%;
	overflow: hidden;
	object-fit: cover;
	img {
		width: 100%;
		display: block;
	}
`;

export const DescriptionContainer = styled.div`
	flex: 1 1 50%;
	margin-left: ${theme.spacing[6]};
`;

export const Title = styled(Typography)`
	margin-bottom: ${theme.spacing[2]};
`;

export const Graphic = styled(Typography)`
	font-size: 6rem;
	color: ${theme.colors.highlight};
	margin-bottom: -${theme.spacing[8]};
	display: block;
`;
