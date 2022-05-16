/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-app-server.herokuapp.com/api/v1/users'

const initialState = {
  users: [{
    typePerson: '',
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    repeatPassword: '',
    role: '',
    image: '',
    favHotels: [],
    isSubscribed: false,
    createdAt: ''
  }],
  status: 'idle',
  error: null,
  user: {}
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

// export const getUser = createAsyncThunk(
//   'users/getUser',
//   async (id) => {
//     try {
//       const response = await axios.get(`${URI}/${id}`)
//       return response.data
//     } catch (error) {
//       return error.message
//     }
//   }
// )

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
      // .addCase(getUser.pending, (state) => {
      //   state.status = 'loading'
      // })
      // .addCase(getUser.fulfilled, (state, action) => {
      //   state.status = 'succeeded'
      //   state.users = action.payload
      // })
      // .addCase(getUser.rejected, (state, action) => {
      //   state.status = 'failed'
      //   state.error = action.error.message
      // })
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
export const getUsersStatus = (state) => state.users.status
export const selectAllUsers = (state) => state.users.users

export const userById = (state, userId) => state.users.users.find(e => e.id === userId)

export default usersSlice.reducer
