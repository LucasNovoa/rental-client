import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const URI = 'https://rental-x-server.herokuapp.com/api/v1'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: URI }),
  tagTypes: ['Hotel', 'User'],
  endpoints: (builder) => ({})
})
