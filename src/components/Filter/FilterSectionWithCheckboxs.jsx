import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "rsuite";
import styled from "styled-components";
import { clearFilter, toggleFilter } from "../../redux/filterSlice";
import FilterSectionWithCheckboxsItem from "./FilterSectionWithCheckboxsItem";
import CloseIcon from '@rsuite/icons/Close';

const Container = styled.div`
	padding: 30px 10px 0;
`;
const ItemsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-wrap: wrap;
`;
const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 10px;
	cursor: pointer;
`;

const FilterSectionWithCheckboxs = (props) => {
	const { filterName, getItems } = props;
	const dispatch = useDispatch();

	const selectedFilters = useSelector((state) => state.filters[filterName]);
	const { data, isLoading } = getItems();
	const onChange = (filterItem) => {
		dispatch(toggleFilter({ filterItem, filterName }));
	};
	const onClear = () => {
		dispatch(clearFilter(filterName));
	};

	if (isLoading) return <Container>Loading</Container>;

	return (
		<Container>
			<ButtonWrapper onClick={onClear}>
				<IconButton
					icon={<CloseIcon />}
					active
					size="sm"
					style={{marginRight: 5}}
				>
				Очистить
				</IconButton>
			</ButtonWrapper>
			<ItemsWrapper>
				{data.results.map((item) => (
					<FilterSectionWithCheckboxsItem
						selectedFilters={selectedFilters}
						key={item.name}
						item={item}
						onChange={onChange}
						style={{ margin: "5px 0" }}
					/>
				))}
			</ItemsWrapper>
		</Container>
	);
};

export default FilterSectionWithCheckboxs;
