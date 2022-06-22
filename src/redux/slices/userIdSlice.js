/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-bookings-server.herokuapp.com/api/v1/users'

const initialState = {
  userId: {},
  status: 'idle',
  error: null
}

export const getUser = createAsyncThunk(
  'userId/getUser',
  async (id) => {
    try {
      const response = await axios.get(`${URI}/${id}`)
      // dispatch(setUserId(response.data))
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const userIdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.userId = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const selectUserById = (state) => state.userId.userId
export const { setUserId } = userIdSlice.actions

export default userIdSlice.reducer
