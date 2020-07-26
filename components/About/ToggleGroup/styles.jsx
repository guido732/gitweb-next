//Styled Components
import styled, { css } from "styled-components";
// Utils
import { theme } from "styles/theme";
import { SRHidden } from "styles/utilities";
import { fontHeadings } from "components/Typography/styles";

export const StyledToggle = styled.fieldset`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: max-content;
	border: none;
	margin-bottom: ${theme.spacing[8]};
`;

const getCheckedStyles = css`
	color: ${theme.colors.textDark};
	background-color: ${theme.colors.main};
	&:hover,
	&:focus {
		color: ${theme.colors.textGray};
		border-color: ${theme.colors.textGray};
		background-color: ${theme.colors.main};
	}
`;

export const ToggleLabel = styled.label`
	${fontHeadings}
	padding: ${theme.spacing[4]};
	cursor: pointer;
	user-select: none;
	color: ${theme.colors.main};
	border: 2px solid ${theme.colors.textDark};
  border-right-width: 0;
  background-color: ${theme.colors.textDark};
  transition: background-color 0.2s ease, border 0.2s ease, color 0.2s ease;
  &:last-child {
    border-right-width: 2px;
  }
	&:hover, &:focus {
    color: ${theme.colors.textDark};
    background-color: ${theme.colors.main};
	}
	${({ checked }) => checked && getCheckedStyles}
`;

export const ToggleInput = styled.input`
	opacity: 0;
	width: 0;
	${SRHidden};
`;
