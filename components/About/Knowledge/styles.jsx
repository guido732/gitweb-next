//Styled Components
import styled, { css } from "styled-components";
// Custom components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const Title = styled(Typography)`
	text-align: center;
	color: ${theme.colors.textGray};
	margin-bottom: ${theme.spacing[8]};
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
	display: grid;
	gap: ${theme.spacing[3]};
	grid-template-columns: 1fr;
	@media screen and (min-width: ${theme.breakpoints.sm}) {
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
`;
