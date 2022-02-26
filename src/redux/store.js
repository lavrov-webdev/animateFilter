import { configureStore } from '@reduxjs/toolkit'
import { gamesApi } from './games-api'
import filters from './filterSlice'

export const store = configureStore({
  reducer: {
    [gamesApi.reducerPath]: gamesApi.reducer,
    filters,
  },
});

