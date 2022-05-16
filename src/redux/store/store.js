import { configureStore } from '@reduxjs/toolkit'
import reservationReducer from '../slices/reservationSlice'
/* import hotelSlice from '../slices/hotelSlice' */
/* import usersReducer from '../slices/userSlice'
import hotelsReducer from '../slices/hotelSlice'
import countriesReducer from '../slices/countrySlice'
<<<<<<< HEAD
import citiesReducer from '../slices/citySlice'
import filterReducer from '../slices/filterSlice'
import userIdReducer from '../slices/userIdSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    hotels: hotelsReducer,
    countries: countriesReducer,
    cities: citiesReducer,
    filter: filterReducer,
    userId: userIdReducer
  }
=======
import citiesReducer from '../slices/citySlice' */

import { apiSlice } from '../api/apiSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    reservation: reservationReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
>>>>>>> 66bc72189f8d6ba248efa9aeb753c936321bd203
})
