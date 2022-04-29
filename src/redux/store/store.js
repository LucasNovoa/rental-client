import { configureStore } from '@reduxjs/toolkit'

import userReducer from '../slices/userSlice'
import hotelReducer from '../slices/hotelSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    hotel: hotelReducer
  }
})
