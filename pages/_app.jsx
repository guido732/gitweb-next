// Styled Components
import { ThemeProvider } from "styled-components";
// Styles
import { GlobalStyles } from "styles/global";
import { theme } from "styles/theme";
// Custom Components
import Navbar from "components/Navbar/index";
import Footer from "components/Footer/index";

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={theme}>
				<Navbar />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</>
	);
}
