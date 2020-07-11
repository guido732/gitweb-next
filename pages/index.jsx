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
			<Navbar />
			<Layout>
				<Header />
			</Layout>

			<footer>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					footy
					{/* Powered by <img src="/img/logo.svg" alt="GTD Logo" className="logo" /> */}
				</a>
			</footer>
		</>
	);
}
