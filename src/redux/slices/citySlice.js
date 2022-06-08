import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-x-server.herokuapp.com/api/v1/cities'

const initialState = {
  cities: [],
  status: 'idle',
  error: null
}

export const getCities = createAsyncThunk(
  'hotels/getcities',
  async () => {
    try {
      const response = await axios.get(URI)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(getCities.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.cities = action.payload
      })
      .addCase(getCities.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// export const {} userSlice.actions

export const selectAllCities = (state) => state.cities.cities
export const getCitiesStatus = (state) => state.cities.status
export const getCitiesError = (state) => state.cities.error

export default citiesSlice.reducer
