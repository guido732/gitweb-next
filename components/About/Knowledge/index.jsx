// React
import React from "react";
// Custom Components
import SkillItem from "./SkillItem";
// Styled Components
import { Title, SkillGrid } from "./styles";
// Utils
import skills from "./skills";

const Knowledge = () => {
	return (
		<>
			<Title>Skills y Tecnologías</Title>
			<SkillGrid>
				{skills.map((skill) => (
					<SkillItem key={skill.id} data={skill} />
				))}
			</SkillGrid>
		</>
	);
};

export default Knowledge;
