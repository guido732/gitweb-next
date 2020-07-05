// Hooks
import { useWindowSize } from "custom_hooks/useWindowSize";
// Theme
import { breakpoints } from "styles/_breakpoints";

const getBreakpoint = () => {
	let size;
	const { width } = useWindowSize();
	switch (true) {
		case width < parseInt(breakpoints.sm):
			size = "xs";
			break;
		case width < parseInt(breakpoints.md):
			size = "sm";
			break;
		case width < parseInt(breakpoints.lg):
			size = "md";
			break;
		case width < parseInt(breakpoints.xl):
			size = "lg";
			break;
		default:
			size = "xl";
			break;
	}
	return size;
};

export { getBreakpoint };
