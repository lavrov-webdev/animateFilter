import React from "react";
import CustomCheckbox from "../common/CustomCheckbox";

const FilterSectionWithCheckboxsItem = ({
	item,
	selectedFilters,
	onChange,
	style
}) => {
	const onChangeHandler = () => onChange(item.name);
	const checked = selectedFilters.includes(item.name);

	return (
		<CustomCheckbox
			checked={checked}
			onChange={onChangeHandler}
			text={item.name}
			style={style}
		/>
	);
};

export default FilterSectionWithCheckboxsItem;
