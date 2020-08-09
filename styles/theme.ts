import { colors } from "./_colors";
import { spacing } from "./_spacing";
import { breakpoints } from "./_breakpoints";

type ThemeTypes = {
	colors: ColorTypes;
	spacing: SpacingTypes;
	shadows: Object;
	breakpoints: BreakpointTypes;
};

type ColorTypes = {
	[key: string]: string;
};
type SpacingTypes = {
	[key: string]: string;
};
type BreakpointTypes = {
	[key: string]: string;
};

export const theme: ThemeTypes = {
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
