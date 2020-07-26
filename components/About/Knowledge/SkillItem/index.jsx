// React
import React from "react";
// Custom Components
import Typography from "components/Typography";
// Styled Components
import { StyledSkill } from "./styles";

const SkillItem = ({ data }) => {
	return (
		<StyledSkill tabIndex={0} textOnly={!data.icon}>
			{data.icon}
			<Typography variant="heading">{data.label}</Typography>
		</StyledSkill>
	);
};

export default SkillItem;
