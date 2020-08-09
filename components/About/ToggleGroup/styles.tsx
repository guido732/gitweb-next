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
	border: none;
	margin-bottom: ${theme.spacing[8]};
	flex-flow: column nowrap;
	@media screen and (min-width: ${theme.breakpoints.sm}) {
		flex-flow: row nowrap;
		width: max-content;
	}
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

type ToggleLabelTypes = {
	checked: boolean;
};

export const ToggleLabel = styled.label<ToggleLabelTypes>`
	${fontHeadings}
	width: 100%;
	padding: ${theme.spacing[4]};
	cursor: pointer;
	user-select: none;
	color: ${theme.colors.main};
	border: 2px solid ${theme.colors.textDark};
	background-color: ${theme.colors.textDark};
	transition: background-color 0.2s ease, border 0.2s ease, color 0.2s ease;
	text-align: center;
	${({ checked }) => checked && getCheckedStyles};
	@media screen and (min-width: ${theme.breakpoints.sm}) {
		flex-flow: row nowrap;
		border-right-width: 0;
		&:last-child {
			border-right-width: 2px;
		}
		&:hover,
		&:focus {
			color: ${theme.colors.textDark};
			background-color: ${theme.colors.main};
		}
	}
`;

export const ToggleInput = styled.input`
	opacity: 0;
	width: 0;
	${SRHidden};
`;
