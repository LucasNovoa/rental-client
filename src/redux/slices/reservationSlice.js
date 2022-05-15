import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  cityName: '',
  checkIn: 'Desde...',
  checkOut: 'Hasta...',
  guests: 1,
  open: false
}

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    updateReservation (state, action) {
      return {
        ...state,
        ...action.payload
      }
    }
  }
})

export const selectReservation = (state) => state.reservation
export const { updateReservation } = reservationSlice.actions

export default reservationSlice.reducer
