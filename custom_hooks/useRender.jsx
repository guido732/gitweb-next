// Hooks
import { useWindowSize } from "custom_hooks/useWindowSize";
// Theme
import { breakpoints } from "styles/_breakpoints";

const isSM = () => {
	const { width } = useWindowSize();
	return width >= parseInt(breakpoints.sm);
};

export { isSM };
