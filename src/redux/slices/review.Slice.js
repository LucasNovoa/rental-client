import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-app-server.herokuapp.com/api/v1/reviews'

export const postReview = createAsyncThunk(
  'reviews/newReview',
  async (payload) => {
    try {
      const response = await axios.post(URI, payload)

      return response.data
    } catch (error) {
      return error.message
    }
  }
)
