import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-bookings-server.herokuapp.com/api/v1/bookings'

export const getBookings = createAsyncThunk(
  'bookings/getBookings',
  async () => {
    try {
      const response = await axios.get(URI)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

export const postBooking = createAsyncThunk(
  'bookings/newBooking',
  async (payload) => {
    try {
      const response = await axios.post(URI, payload)

      return await axios.get(`${URI}/${response.data.id}`)
    } catch (error) {
      return error.message
    }
  }
)
