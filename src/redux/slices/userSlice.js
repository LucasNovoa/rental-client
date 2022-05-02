/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://polar-waters-05125.herokuapp.com/api/v1/users'

const initialState = {
  users: [{
    id: 1,
    name: 'Diego Armando',
    lastName: 'Maradona',
    userName: 'DM10',
    email: 'dieguito_maradona@dios.com.ar',
    profilePic: 'https://i.pinimg.com/564x/1b/c8/ff/1bc8ffcc2766f83c55deef6cc917301d.jpg',
    createdAt: '2022-10'
  }],
  status: 'idle',
  error: null
}

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    try {
      const response = await axios.get(URI)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

export const postUser = createAsyncThunk(
  'users/createUser',
  async (payload) => {
    try {
      const response = await axios.post(URI, payload)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(postUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = action.payload
      })
      .addCase(postUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// export const {} userSlice.actions

export const selectAllUsers = (state) => state.users.users

export default usersSlice.reducer
