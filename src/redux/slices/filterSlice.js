import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cityId: 0,
  cityName: '',
  checkIn: 'Desde...',
  checkOut: 'Hasta...',
  guests: 0,
  highestPrice: 999999,
  stars: 0
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
    //   console.log(action.payload.checkIn)
      if (action.payload.cityId) state.cityId = action.payload.cityId
      if (action.payload.cityName) state.cityName = action.payload.cityName
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
