import { createSlice } from "@reduxjs/toolkit"
import _ from 'lodash'

const initialState = {
  genres: [],
  platforms: [],
  stores: [],
  tags: [],
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleFilter: (state, { payload }) => {
      state[payload.filterName] = _.xor([payload.filterItem], state[payload.filterName]);
    },
    clearFilter: (state, {payload}) => {
      state[payload] = initialState[payload];
    }
  },
})

export const { toggleFilter, clearFilter } = filterSlice.actions
export default filterSlice.reducer;