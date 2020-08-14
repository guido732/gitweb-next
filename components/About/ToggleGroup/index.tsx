// React
import React, { FC } from "react";
// Styled components
import { StyledToggle, ToggleLabel, ToggleInput } from "./styles";
// Types
import { IToggleGroup } from "./types";
// Utils
import Data from "./toggleData";

const ToggleGroup: FC<IToggleGroup> = ({ onChange, activeTab, name }) => {
	const setTabcontent = (e: React.ChangeEvent<HTMLInputElement>) => {
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
