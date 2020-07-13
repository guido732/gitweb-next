//Styled Components
import styled, { css } from "styled-components";
// Components
import Typography from "components/Typography";
// Utils
import { theme } from "styles/theme";

export const FilterContainer = styled.div`
	margin-bottom: ${theme.spacing[4]};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

export const FilterText = styled(Typography)`
	margin-bottom: ${theme.spacing[2]};
`;

export const StyledInput = styled.input`
	border: 1px solid ${theme.colors.secondary};
	border-radius: ${theme.spacing[1]};
	box-shadow: 0px ${theme.spacing[1]} 5px 0px rgba(0, 0, 0, 0.1);
	padding: ${theme.spacing[3]} ${theme.spacing[4]};
	color: ${theme.colors.textGray};
	font-family: "Montserrat", sans-serif;
	font-weight: 700;
	width: 60%;
	text-align: center;
`;
