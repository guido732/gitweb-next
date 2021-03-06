//Styled Components
import styled from "styled-components";
// Components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const PortfolioContainer = styled.section`
	margin-bottom: ${theme.spacing[8]};
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	justify-content: center;
`;

export const Subtitle = styled(Typography)`
	margin-bottom: ${theme.spacing[4]};
	text-align: center;
	text-transform: uppercase;
`;

export const PortfolioGrid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	align-items: stretch;
	justify-items: stretch;
	margin: 0 -${theme.spacing[2]};
	margin-bottom: ${theme.spacing[8]};
	@media screen and (min-width: ${theme.breakpoints.md}) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (min-width: ${theme.breakpoints.lg}) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
