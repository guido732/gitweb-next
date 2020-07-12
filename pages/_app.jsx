// Styled Components
import { ThemeProvider } from "styled-components";
// Styles
import "styles/global.scss";
import { theme } from "styles/theme";
// Custom Components
import Navbar from "components/Navbar/index";
import Layout from "components/Layout/index";
import Footer from "components/Home/Footer/index";

export default function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Footer />
		</ThemeProvider>
	);
}
