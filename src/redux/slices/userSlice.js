import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://polar-waters-05125.herokuapp.com/api/v1/users'

const initialState = [
  {
    id: 1,
    name: 'Diego Armando',
    lastName: 'Maradona',
    userName: 'DM10',
    email: 'dieguito_maradona@dios.com.ar',
    profilePic: 'https://i.pinimg.com/564x/1b/c8/ff/1bc8ffcc2766f83c55deef6cc917301d.jpg',
    createdAt: '2022-10'
  }
]

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

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        return [...state, ...action.payload]
      })
  }
})

// export const {} userSlice.actions

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer
