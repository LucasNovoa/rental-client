import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const URI = ''

const initialState = {
  user: []
}

export const getHotel = createAsyncThunk(
  'user/getUser',
  async () => {
    try {

    } catch (error) {

    }
  }
)

const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {},
  extraReducers: {}
})

// export const {} userSlice.actions

export default hotelSlice.reducer
