// React
import React from "react";
// Styled components
import { StyledToggle, ToggleLabel, ToggleInput } from "./styles";
// Utils
import Data from "./toggleData";

const ToggleGroup = ({ onChange, activeTab }) => {
	const setTabcontent = (e) => {
		const { id } = e.target;
		onChange(id);
	};

	return (
		<StyledToggle>
			{/* <legend>Elige un color</legend> */}
			{Data.map((el) => (
				<ToggleLabel key={el.id}>
					<ToggleInput
						type="radio"
						name="tabs"
						value={el.id}
						id={el.id}
						onChange={setTabcontent}
						checked={activeTab === el.id}
					/>
					{el.label}
				</ToggleLabel>
			))}
		</StyledToggle>
	);
};

export default ToggleGroup;
