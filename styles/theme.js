import { colors } from "./_colors";
import { spacing } from "./_spacing";
import { breakpoints } from "./_breakpoints";

export const theme = {
	colors: {
		...colors,
	},
	spacing: {
		...spacing,
	},
	shadows: {
		main: `0 .125rem .25rem rgba(0,0,0,.075)`,
	},
	breakpoints: { ...breakpoints },
};
