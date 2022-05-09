import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../slices/userSlice'
import hotelsReducer from '../slices/hotelSlice'
import countriesReducer from '../slices/countrySlice'
import citiesReducer from '../slices/citySlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    hotels: hotelsReducer,
    countries: countriesReducer,
    cities: citiesReducer
  }
})
