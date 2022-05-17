import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const usersAdapter = createEntityAdapter({})

const initialState = usersAdapter.getInitialState()

export const extendedApiSliceUser = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: responseData => {
        return usersAdapter.setAll(initialState, responseData)
      },
      providesTags: (result, error, arg) => [
        { type: 'User', id: 'LIST' },
        ...result.ids.map(id => ({ type: 'User', id }))
      ]
    }),
    getUserDetail: builder.query({
      query: id => `/users/${id}`,
      transformResponse: responseData => {
        const formatedData = { 0: responseData }
        return usersAdapter.setAll(initialState, formatedData)
      },
      provideTags: (result, error, arg) => [
        ...result.ids.map(id => ({ type: 'User', id }))
      ]
    }),
    addNewUser: builder.query({
      query: user => ({
        url: '/users',
        method: 'POST',
        body: {
          ...user
        }
      }),
      invalidateTags: [
        { type: 'User', id: 'LIST' }
      ]
    })
  })
})

export const {
  useAddNewUserQuery,
  useGetUsersQuery,
  useGetUserDetailQuery
} = extendedApiSliceUser

// Selectors

export const selectUsersResult = extendedApiSliceUser.endpoints.getUsers.select()

const selectUsersData = createSelector(
  selectUsersResult,
  usersResult => {
    return usersResult.data
  }
)

export const {
  selectAll: selectAllUsers,
  selectById: selectUserById,
  selectIds: selectUsersIds
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
