// Styled Components
import { ThemeProvider } from "styled-components";
// Styles
import "styles/global.scss";
import { theme } from "constants/theme";

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
