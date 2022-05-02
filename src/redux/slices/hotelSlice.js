import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URI = 'https://polar-waters-05125.herokuapp.com/api/v1/hotels';

const initialState = {
  hotels: [],
  status: 'idle',
  error: null,
};

export const getHotels = createAsyncThunk(
  'hotels/getHotels',
  async () => {
    try {
      const response = await axios.get(URI);
      return response.data;
    } catch (error) {
      return error.message;
    }
  },
);

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getHotels.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hotels = action.payload;
      })
      .addCase(getHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// export const {} userSlice.actions

export const selectAllHotels = (state) => state.hotels.hotels;
export const getHotelsStatus = (state) => state.hotels.status;
export const getHotelsError = (state) => state.hotels.error;

export default hotelsSlice.reducer;
