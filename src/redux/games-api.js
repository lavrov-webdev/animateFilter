import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "?key=3671a856e6784c47a50d88a641cb346f";

export const gamesApi = createApi({
	reducerPath: "gameApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.rawg.io/api/" }),
	endpoints: (builder) => ({
		getGames: builder.query({
			query: () => `games${apiKey}&page_size=100&page=1`,
		}),
		getGenres: builder.query({
			query: () => `genres${apiKey}`,
		}),
		getPlatforms: builder.query({
			query: () => `platforms${apiKey}`,
		}),
		getPublishers: builder.query({
			query: () => `publishers${apiKey}`,
		}),
		getStores: builder.query({
			query: () => `stores${apiKey}`,
		}),
		getTags: builder.query({
			query: () => `tags${apiKey}`,
		}),
	}),
});

export const {
	useGetGamesQuery,
	useGetGenresQuery,
	useGetPlatformsQuery,
	useGetPublishersQuery,
	useGetStoresQuery,
  useGetTagsQuery,
} = gamesApi;
