// React
import React, { useState } from "react";
// Custom Components
import Layout from "components/Layout";
import CallToAction from "components/CallToAction";

const DummyComponent1 = () => <div>Conocimiento</div>;
const DummyComponent2 = () => <div>Experiencia</div>;
const DummyComponent3 = () => <div>Formación</div>;

const About = () => {
	const [selectedTab, setSelectedTab] = useState("knowledge");

	const getTabContent = () => {
		switch (selectedTab) {
			case "knowledge":
				return <DummyComponent1 />;
			case "experience":
				return <DummyComponent2 />;
			case "formation":
				return <DummyComponent3 />;
			default:
				return <DummyComponent1 />;
		}
	};

	const setTabcontent = (e) => {
		const { id } = e.target;
		setSelectedTab(id);
	};

	return (
		<>
			<Layout>
				<header>
					<div>
						<img src="" alt="imagen" />
					</div>
					<div>
						<h2>texto</h2>
						<div>descripcion</div>
					</div>
				</header>
				<section>
					<fieldset>
						{/* <legend>Elige un color</legend> */}
						<label>
							<input
								type="radio"
								name="color"
								value="azul"
								id="knowledge"
								onChange={setTabcontent}
								checked={selectedTab === "knowledge"}
							/>
							Conocimiento
						</label>
						<label>
							<input
								type="radio"
								name="color"
								value="negro"
								id="experience"
								onChange={setTabcontent}
								checked={selectedTab === "experience"}
							/>
							Experiencia
						</label>
						<label>
							<input
								type="radio"
								name="color"
								value="amarillo"
								id="formation"
								onChange={setTabcontent}
								checked={selectedTab === "formation"}
							/>
							Formación
						</label>
					</fieldset>
					{getTabContent()}
				</section>
			</Layout>
			<CallToAction />
		</>
	);
};

export default About;
