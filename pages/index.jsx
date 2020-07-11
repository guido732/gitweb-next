// Next
import Head from "next/head";
// Components
import Navbar from "components/Navbar";
import Layout from "components/Layout";
import Header from "components/Home/Header";

export default function Home() {
	return (
		<>
			<Head>
				<title>Guido Torres - Frontend Web Dev</title>
				<link rel="icon" href="/img/favicon/favicon.ico" />
			</Head>
			<Header />
		</>
	);
}
