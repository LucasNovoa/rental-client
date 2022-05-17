import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
  otherFilters: {}
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
