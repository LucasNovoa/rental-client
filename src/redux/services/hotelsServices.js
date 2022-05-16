import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const hotelsAdapter = createEntityAdapter({})

const initialState = hotelsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getHotels: builder.query({
      query: () => '/hotels',
      transformResponse: responseData => {
        return hotelsAdapter.setAll(initialState, responseData)
      },
      providesTags: (result, error, arg) => [
        { type: 'Hotel', id: 'LIST' },
        ...result.ids.map(id => ({ type: 'Hotel', id }))
      ]
    }),
    getHotelsByName: builder.query({
      query: name => `/hotels/?name=${name}`,
      transformResponse: responseData => {
        return hotelsAdapter.setAll(initialState, responseData)
      },
      provideTags: (result, error, arg) => [
        ...result.ids.map(id => ({ type: 'Hotel', id }))
      ]
    }),
    getCities: builder.query({
      query: () => '/cities',
      transformResponse: responseData => {
        return hotelsAdapter.setAll(initialState, responseData)
      },
      provideTags: (result, error, arg) => {
        return [
          ...result.ids.map(id => ({ type: 'City', id }))
        ]
      }
    })
  })
})

export const {
  useGetHotelsQuery,
  useGetHotelsByNameQuery,
  useGetCitiesQuery
} = extendedApiSlice

// Selectors

export const selectHotelsResult = extendedApiSlice.endpoints.getHotels.select()
export const selectCitiesResult = extendedApiSlice.endpoints.getCities.select()

const selectHotelsData = createSelector(
  selectHotelsResult,
  hotelsResult => {
    return hotelsResult.data
  }
)

const selectCitiesData = createSelector(
  selectCitiesResult,
  citiesResult => {
    return citiesResult.data
  }
)

export const {
  selectAll: selectAllHotels,
  selectById: selectHotelById,
  selectIds: selectHotelIds
} = hotelsAdapter.getSelectors(state => selectHotelsData(state) ?? initialState)

export const {
  selectAll: selectAllCities,
  selectById: selectCityById,
  selectIds: selectCityIds
} = hotelsAdapter.getSelectors(state => selectCitiesData(state) ?? initialState)
