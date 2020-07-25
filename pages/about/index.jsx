// React
import React, { useState } from "react";
// Custom Components
import Layout from "components/Layout";
import CallToAction from "components/CallToAction";
import Typography from "components/Typography";
// Styled components
import { StyledHeader, ImageContainer, DescriptionContainer, Graphic, Title } from "./styles";

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
				<StyledHeader>
					<ImageContainer>
						<img src="img/profile-sq2.jpg" alt="It's a me, Guido!" />
					</ImageContainer>
					<DescriptionContainer>
						<Graphic element="span" variant="heading">
							*
						</Graphic>
						<Title element="h2" size={8} variant="heading">
							Un poco acerca de mi:
						</Title>
						<Typography>
							Diseñador por formación y desarrollador por vocación. Luego de recibirme de Diseñador Industrial y
							trabajar de ello unos años, estoy volviendo a incursionar en el área del desarrollo web buscando
							establecerme laboralmente en el rubro. Mi objetivo personal es que mi trabajo me ayude a crecer y poder
							aportar lo mejor que tengo para generar algo nuevo o mejor.
						</Typography>
					</DescriptionContainer>
				</StyledHeader>
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
