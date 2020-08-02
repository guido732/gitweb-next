// Next
import Head from "next/head";
// Context Provider
import { SearchProvider } from "context/SearchContext";
// Components
import Layout from "components/Layout";
import Header from "components/Home/Header";
import CallToAction from "components/CallToAction";
import Portfolio from "components/Home/Portfolio";

export default function Home() {
	return (
		<>
			<Head>
				<title>Guido Torres - Frontend Web Dev</title>
				<link rel="icon" href="/img/favicon/favicon.ico" />
			</Head>
			<Layout>
				<Header />
				<SearchProvider>
					<Portfolio />
				</SearchProvider>
			</Layout>
			<CallToAction />
		</>
	);
}
