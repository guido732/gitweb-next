import "styles/global.scss";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {},
};

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
