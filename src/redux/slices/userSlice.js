import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URI = ''

const initialState = {
  user: []
}

export const getUser = createAsyncThunk(
  'user/getUser',
  async () => {
    try {

    } catch (error) {

    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {}
})

// export const {} userSlice.actions

export default userSlice.reducer
