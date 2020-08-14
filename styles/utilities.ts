import { css } from "styled-components";
import { theme } from "./theme";

export const CenteredContent = css`
	margin: auto;
	max-width: ${theme.breakpoints.lg};
	width: 100%;
`;

export const SRHidden = css`
	border: 0 !important;
	clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
	clip-path: inset(50%) !important; /* 2 */
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	position: absolute !important;
	white-space: nowrap !important; /* 3 */
`;
