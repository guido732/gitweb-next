// React
import React, { useState } from "react";
// Custom Components
import Layout from "components/Layout";
// import CallToAction from "components/CallToAction";
import Typography from "components/Typography";
// import ToggleGroup from "components/About/ToggleGroup";
import Knowledge from "components/About/Knowledge";
// Styled components
import {
	StyledHeader,
	ImageContainer,
	DescriptionContainer,
	Graphic,
	Title,
	StyledSeparator,
} from "pageStyles/about/styles";

const DummyComponent2 = () => <div>Experiencia</div>;
const DummyComponent3 = () => <div>Formación</div>;

const About = () => {
	const [selectedTab, setSelectedTab] = useState("knowledge");

	const getTabContent = () => {
		switch (selectedTab) {
			case "knowledge":
				return <Knowledge />;
			case "experience":
				return <DummyComponent2 />;
			case "formation":
				return <DummyComponent3 />;
			default:
				return <Knowledge />;
		}
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
							Curioso, pragmático, detallista y siempre estoy buscando algo nuevo para aprender e incorporar.
						</Typography>
						<Typography>
							Me formé como Diseñador Industrial en la UBA y luego migré hacia el desarrollo, enfocándome en el
							Desarrollo Web Frontend. Actualmente trabajo como desarrollador frontend haciendo foco en stack React,
							buscando el próximo paso en mi crecimiento profesional.
						</Typography>
					</DescriptionContainer>
				</StyledHeader>
				<StyledSeparator size={0} />
				<section>
					{/* <ToggleGroup onChange={setSelectedTab} activeTab={selectedTab} name="about-toggle" /> */}
					{getTabContent()}
				</section>
			</Layout>
			{/* <CallToAction /> */}
		</>
	);
};

export default About;
