import React from "react";
import styled from "styled-components";
import {
	useGetGamesQuery,
	useGetGenresQuery,
	useGetPlatformsQuery,
	useGetPublishersQuery,
	useGetStoresQuery,
	useGetTagsQuery,
} from "../../redux/games-api";
import Accordion from "../common/Accordion";
import FilterSectionWithCheckboxs from "./FilterSectionWithCheckboxs";

const Container = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 400px;
`;
const Section = styled.div`
	width: 100%;
	min-height: 50px;
`;

const Filter = (props) => {
	useGetGamesQuery();
	useGetGenresQuery();
	useGetPlatformsQuery();
	useGetPublishersQuery();
	useGetStoresQuery();
	useGetTagsQuery();

	return (
		<Container>
			<Section>
				<Accordion title="Жанры" isOpenDefault={true}>
					<FilterSectionWithCheckboxs
						filterName="genres"
						getItems={useGetGenresQuery}
					/>
				</Accordion>
			</Section>
			<Section>
				<Accordion title="Платформы">
					<FilterSectionWithCheckboxs
						filterName="platforms"
						getItems={useGetPlatformsQuery}
					/>
				</Accordion>
			</Section>
			<Section>
				<Accordion title="Магазины">
					<FilterSectionWithCheckboxs
						filterName="stores"
						getItems={useGetStoresQuery}
					/>
				</Accordion>
			</Section>
			<Section>
				<Accordion title="Теги">
					<FilterSectionWithCheckboxs
						filterName="tags"
						getItems={useGetTagsQuery}
					/>
				</Accordion>
			</Section>
		</Container>
	);
};

export default Filter;
