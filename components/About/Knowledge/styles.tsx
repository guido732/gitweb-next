//Styled Components
import styled from "styled-components";
// Custom components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const Title = styled(Typography)`
	text-align: center;
	color: ${theme.colors.textGray};
	margin-bottom: ${theme.spacing[6]};
	&::before,
	&::after {
		content: "";
		display: inline-block;
		width: ${theme.spacing[9]};
		border-bottom: ${theme.spacing[0]} solid ${theme.colors.textGray};
		margin: 0 ${theme.spacing[3]};
	}
`;

export const SkillGrid = styled.div`
	display: flex;
	place-content: center;
	flex-flow: row wrap;
	width: 100%;
	margin-bottom: ${theme.spacing[8]};
`;
