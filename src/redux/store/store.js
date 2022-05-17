import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../slices/reservationSlice'
import filterReducer from '../slices/filtersSlice'
/* import hotelSlice from '../slices/hotelSlice' */
/* import usersReducer from '../slices/userSlice'
import hotelsReducer from '../slices/hotelSlice'
import countriesReducer from '../slices/countrySlice'
import citiesReducer from '../slices/citySlice' */

import { apiSlice } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    reservation: reservationReducer,
    filters: filterReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})
