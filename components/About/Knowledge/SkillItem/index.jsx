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

	const handleSearch = (payload) => (e) => {
		e.preventDefault();
		if (payload) {
			dispatch({ type: "FILTER", payload });
			window.scrollTo({
				top: 0,
				left: 0,
			});
			Router.push("/");
		}
	};
	return (
		<StyledSkill hasIcon={!!data.icon} hasLink={!!data.keyword} onClick={handleSearch(data.keyword)} href="/">
			{data.icon}
			<Typography variant="heading">{data.label}</Typography>
		</StyledSkill>
	);
};

export default SkillItem;
