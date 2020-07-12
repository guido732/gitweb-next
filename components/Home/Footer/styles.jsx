// Styled Comps
import styled from "styled-components";
// Custom Components
import Typography from "components/Typography";
// Utils
import { CenteredContent } from "styles/utilities";
import { theme } from "styles/theme";

export const StyledFooter = styled.footer`
	color: white;
	background-color: ${theme.colors.textDark};
	padding: ${theme.spacing[6]} ${theme.spacing[6]};
	@media screen and (min-width: ${theme.breakpoints.lg}) {
		padding: ${theme.spacing[6]} 0;
	}
`;

export const TopContainer = styled.div`
	${CenteredContent};
`;

export const Separator = styled.div`
	width: 100%;
	border-bottom: 2px solid ${theme.colors.textGray};
	margin-bottom: ${theme.spacing[4]};
`;

export const BottomContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	${CenteredContent};
`;

export const Copyright = styled(Typography)`
	padding-right: ${theme.spacing[4]};
`;

export const MediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Media = styled.div`
	margin-right: ${theme.spacing[4]};
	margin-top: 0.25rem;
	&:last-child {
		margin-right: 0;
	}
	svg {
		width: ${theme.spacing[5]};
		height: ${theme.spacing[5]};
	}
`;
