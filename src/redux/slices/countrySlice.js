import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-bookings-server.herokuapp.com/api/v1/countries'

const initialState = {
  countries: [],
  status: 'idle',
  error: null
}

export const getCountries = createAsyncThunk(
  'hotels/getCountries',
  async () => {
    try {
      const response = await axios.get(URI)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(getCountries.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.countries = action.payload
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

// export const {} userSlice.actions

export const selectAllCountries = (state) => state.countries.countries
export const getCountriesStatus = (state) => state.countries.status
export const getCountriesError = (state) => state.countries.error

export default countriesSlice.reducer
