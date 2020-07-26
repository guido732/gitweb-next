// React
import React from "react";
// Styled components
import { StyledToggle, ToggleLabel, ToggleInput } from "./styles";
// Utils
import Data from "./toggleData";

const ToggleGroup = ({ onChange, activeTab, name }) => {
	const setTabcontent = (e) => {
		const { id } = e.target;
		onChange(id);
	};

	return (
		<StyledToggle>
			{Data.map((el) => (
				<ToggleLabel key={el.id} checked={activeTab === el.id}>
					<ToggleInput
						type="radio"
						name={name}
						value={el.id}
						id={el.id}
						onChange={setTabcontent}
						checked={activeTab === el.id}
					/>
					{el.label.toUpperCase()}
				</ToggleLabel>
			))}
		</StyledToggle>
	);
};

export default ToggleGroup;
