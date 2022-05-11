import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  city: '',
  checkIn: 'Desde...',
  checkOut: 'Hasta...',
  guests: 1,
  highestPrice: '999999',
  stars: 'All'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
    //   console.log(action.payload.checkIn)
      if (action.payload.city) state.city = action.payload.city
      if (action.payload.checkIn) state.checkIn = action.payload.checkIn
      if (action.payload.checkOut) state.checkOut = action.payload.checkOut
      if (action.payload.guests) state.guests = action.payload.guests
      if (action.payload.highestPrice) state.highestPrice = action.payload.highestPrice
      if (action.payload.stars) state.stars = action.payload.stars
      if (action.payload.stars === '') state.stars = action.payload.stars
    }
  },
  extraReducers: {}

})

export const selectAllFilters = (state) => state.filter

export const { filter } = filterSlice.actions

export default filterSlice.reducer
