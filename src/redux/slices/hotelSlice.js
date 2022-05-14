import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const URI = 'https://rental-app-server.herokuapp.com/api/v1/hotels'

const initialState = {
  hotels: [],
  filteredHotels: [],
  status: 'idle',
  error: null
}

export const getHotels = createAsyncThunk(
  'hotels/getHotels',
  async () => {
    try {
      const response = await axios.get(URI)
      return response.data
    } catch (error) {
      return error.message
    }
  }
)

export const getFilteredHotels = createAsyncThunk(
  'hotels/getFilteredHotels',
  async (payload) => {
    try {
      const response = await axios.post(`${URI}/filter`, payload)

      return response.data
    } catch (error) {
      return error.message
    }
  }
)

export const postHotel = createAsyncThunk(
  'hotels/createHotel',
  async (payload) => {
    try {
      const response = await axios.post(URI, payload)

      return response.data
    } catch (error) {
      return error.message
    }
  }
)

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {
    filterHotels: (state, action) => {
      const { city, checkIn, checkOut, guests, highestPrice, stars } = action.payload
      const lower = city && city.toLowerCase()

      const filter = state.hotels.filter(e =>
        e.City.name.toLowerCase().includes(lower) &&
        e.guests >= guests
      )

      state.filteredHotels = filter
    }
  },
  extraReducers (builder) {
    builder
      .addCase(getHotels.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getHotels.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.hotels = action.payload
        state.filteredHotels = action.payload
      })
      .addCase(getHotels.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getFilteredHotels.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getFilteredHotels.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.filteredHotels = action.payload
      })
      .addCase(getFilteredHotels.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(postHotel.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(postHotel.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.hotels = action.payload
      })
      .addCase(postHotel.rejected, (state, action) => {
        state.status = 'failed'
        state.hotels = action.payload
      })
  }
})

// export const {} userSlice.actions

export const selectAllHotels = (state) => state.hotels.hotels
export const getHotelsStatus = (state) => state.hotels.status
export const getHotelsError = (state) => state.hotels.error

export const selectFilteredHotels = (state) => state.hotels.filteredHotels

export const selectHotelByName = (state, hotelName) => state.hotels.hotels.find(hotel => hotel.name === hotelName)

export const { filterHotels } = hotelsSlice.actions

export default hotelsSlice.reducer
