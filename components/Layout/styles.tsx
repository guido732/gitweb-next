// Styled Comps
import styled from "styled-components";
// Utils
import { theme } from "styles/theme";

export const StyledContainer = styled.main`
	width: 100%;
	max-width: ${theme.breakpoints.lg};
	margin: 0 auto;
	margin-top: 8rem;
	padding: 0 2rem;
	@media screen and (min-width: ${theme.breakpoints.lg}) {
		padding: 0;
	}
`;
