// React
import React from "react";
// Custom Components
import SkillItem from "./SkillItem";
// Styled Components
import { Title, SkillGrid } from "./styles";
// Utils
import { skills, designSkills, otherSkills } from "./data";

const Knowledge = () => {
	return (
		<>
			<Title element="h3" size={4}>
				Skills y Tecnologías
			</Title>
			<SkillGrid>
				{skills.map((skill) => (
					<SkillItem key={skill.id} data={skill} />
				))}
			</SkillGrid>
			<Title element="h3" size={4}>
				Herramientas de Diseño
			</Title>
			<SkillGrid>
				{designSkills.map((skill) => (
					<SkillItem key={skill.id} data={skill} />
				))}
			</SkillGrid>
			<Title element="h3" size={4}>
				Otros conocimientos
			</Title>
			<SkillGrid>
				{otherSkills.map((skill) => (
					<SkillItem key={skill.id} data={skill} />
				))}
			</SkillGrid>
		</>
	);
};

export default Knowledge;
