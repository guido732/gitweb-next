// React
import React from "react";
// Next
import Router from "next/router";
// Context
import { useDispatchSearch } from "context/SearchContext";
// Custom Components
import Typography from "components/Typography";
// Styled Components
import { StyledSkill } from "./styles";

const SkillItem = ({ data }) => {
	const dispatch = useDispatchSearch();

	const handleSearch = (e, payload) => {
		e.preventDefault();
		dispatch({ type: "FILTER", payload });
		Router.push("/");
	};
	return (
		<StyledSkill textOnly={!data.icon} onClick={(e) => handleSearch(e, data.label)} href="/">
			{data.icon}
			<Typography variant="heading">{data.label}</Typography>
		</StyledSkill>
	);
};

export default SkillItem;
