// Styled Comps
import styled from "styled-components";
// Custom Components
import Typography from "components/Typography";
// Utils
import { CenteredContent } from "styles/utilities";
import { theme } from "styles/theme";

export const StyledCta = styled.section`
	padding: ${theme.spacing[6]} 0;
	background-color: ${theme.colors.grayLight};
	width: 100%;
`;

export const CtaContent = styled.div`
	${CenteredContent}
`;
