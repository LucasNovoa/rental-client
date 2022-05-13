import { configureStore } from '@reduxjs/toolkit'
/* import hotelSlice from '../slices/hotelSlice' */
/* import usersReducer from '../slices/userSlice'
import hotelsReducer from '../slices/hotelSlice'
import countriesReducer from '../slices/countrySlice'
import citiesReducer from '../slices/citySlice' */

import { apiSlice } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer
    /*     hotels: hotelSlice */
    /* users: usersReducer,
    hotels: hotelsReducer,
    countries: countriesReducer,
    cities: citiesReducer */
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
