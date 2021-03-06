//Styled Components
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: "Montserrat";
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: local("Montserrat Bold"), local("Montserrat-Bold"), url("/public/fonts/montserrat-bold.woff2") format("woff2");
	}

	@font-face {
		font-family: "Playfair Display";
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url("/public/fonts/playfair-display.woff2") format("woff2");
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}

	@font-face {
		font-family: "Source Sans Pro";
		font-style: normal;
		font-weight: 300;
		font-display: swap;
		src: local("Source Sans Pro Light"), local("SourceSansPro-Light"),
			url("/public/fonts/source-sans-pro.woff2") format("woff2");
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
			"Open Sans", "Helvetica Neue", sans-serif;
	}

	a,
	a:hover,
	ul,
	li {
		text-decoration: none;
		list-style: none;
		color: inherit;
	}

	%font-headings {
		font-family: "Montserrat", sans-serif;
		font-weight: 700;
	}
	%font-serif {
		font-family: "Playfair Display", serif;
		font-weight: 500;
	}
	%font-sans {
		font-family: "Source Sans Pro", sans-serif;
		font-weight: 300;
	}
`;
