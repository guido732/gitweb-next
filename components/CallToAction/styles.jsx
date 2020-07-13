// Styled Comps
import styled from "styled-components";
// Custom Components
import Typography from "components/Typography";
import Separator from "components/Separator";
import Button from "components/Button";
// Utils
import { CenteredContent } from "styles/utilities";
import { theme } from "styles/theme";

export const StyledCta = styled.aside`
	padding: ${theme.spacing[6]} 0;
	background-color: ${theme.colors.grayLight};
	width: 100%;
`;

export const CtaContent = styled.div`
	${CenteredContent}
`;

export const HeaderContainer = styled.div`
	display: flex;
	align-items: flex-end;
	margin-bottom: ${theme.spacing[4]};
`;

export const StyledHeader = styled(Typography)`
	flex: 1 0 auto;
	padding-right: ${theme.spacing[4]};
	color: ${theme.colors.textDark};
`;

export const StyledSubHeader = styled(Typography)`
	margin-bottom: ${theme.spacing[4]};
`;

export const StyledSeparator = styled(Separator)`
	margin-bottom: ${theme.spacing[2]};
`;
