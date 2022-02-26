import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _ from 'lodash';
import { useGetGamesQuery } from "../redux/games-api";

const createFilter = (filterName, createArrayOfItemFilterParams) => {
  return (data, filter) => {
    if (filter.length === 0) return data;
    return data.filter((dataItem) => {
      const itemFilterElements = dataItem[filterName].map(createArrayOfItemFilterParams);
      return filter.every(filterItem => itemFilterElements.includes(filterItem));
    });
  }
}

const filterByGenres = createFilter('genres', g => g.name);
const filterByPlatforms = createFilter('platforms', p => p.platform.name);
const filterByStores = createFilter('stores', s => s.store.name);
const filterByTags = createFilter('tags', t => t.name);


export const useFilteredGames = () => {
  const { data = {results: []}, isLoading } = useGetGamesQuery();
  const filters = useSelector(state => state.filters);
  const [results, setResults] = useState([]);
  useEffect(() => {
    setResults(data.results);
  }, [isLoading]);
  useEffect(() => {
    const filteredByGenres = filterByGenres(data.results, filters.genres);
    const fileredByPlatforms = filterByPlatforms(data.results, filters.platforms);
    const filteredByStores = filterByStores(data.results, filters.stores);
    const filteredByTags = filterByTags(data.results, filters.tags);
    setResults(_.intersection(filteredByGenres, fileredByPlatforms, filteredByStores, filteredByTags));
  },[filters]);
  
  if (isLoading) return [[], true];
  return [results, isLoading];
}