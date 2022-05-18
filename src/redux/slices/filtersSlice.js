import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
  otherFilters: {},
  ranges: {
    price: { min: 0, max: 9999 },
    stars: { min: 0, max: 5 }
  }
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilters (state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const selectFilters = (state) => state.filters
export const { updateFilters } = filtersSlice.actions

export default filtersSlice.reducer
