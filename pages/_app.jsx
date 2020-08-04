// Styled Components
import { ThemeProvider } from "styled-components";
// Context Provider
import { SearchProvider } from "context/SearchContext";
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
				<SearchProvider>
					<Navbar />
					<Component {...pageProps} />
					<Footer />
				</SearchProvider>
			</ThemeProvider>
		</>
	);
}
