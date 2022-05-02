import { configureStore } from '@reduxjs/toolkit'

import usersReducer from '../slices/userSlice'
import hotelsReducer from '../slices/hotelSlice'

export const store = configureStore({
  reducer: {
    users: usersReducer,
    hotels: hotelsReducer
  }
})
