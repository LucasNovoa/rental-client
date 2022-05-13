/* eslint-disable camelcase */
import React, { useState, useContext, createContext } from 'react'

import axios from 'axios'

import Cookie from 'js-cookie'

const AuthContext = createContext()

export function ProviderAuth ({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProvideAuth () {
  const [user, setUser] = useState(null)

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    const { data: access_token } = await axios.post('https://rental-app-server.herokuapp.com/api/v1/auth/login', { email, password }, options)

    if (access_token) {
      const token = access_token.token
      const userId = access_token.user.id

      Cookie.set('token', token, { expires: 5 })

      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: user } = await axios.get(`https://rental-app-server.herokuapp.com/api/v1/users/${userId}`)

      setUser(user)

      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  const recovery = async (email) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    await axios.post('https://rental-app-server.herokuapp.com/api/v1/auth/recovery', { email }, options)
  }

  const changePass = async (token, newPassword) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    await axios.post('http://localhost:3000/api/v1/auth/change-password', { token, newPassword }, options)
  }

  const logout = () => {
    Cookie.remove('token')
    window.localStorage.removeItem('user')
    setUser(null)
    delete axios.defaults.headers.Authorization
    window.location.href = '/login'
  }

  const signInGoogle = async () => {
    window.open('http://localhost:3001/api/v1/auth/google', '_self')

    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    const { data: access_token } = await axios.get('http://localhost:3001/api/v1/auth/getGoogleUser', options)

    if (access_token) {
      const token = access_token.token
      const userId = access_token.user.id

      Cookie.set('token', token, { expires: 5 })

      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: user } = await axios.get(`http://localhost:3001/api/v1/users/${userId}`)

      setUser(user)

      window.localStorage.setItem('user', JSON.stringify(user))
    }
  }

  return {
    user,
    signIn,
    logout,
    recovery,
    changePass,
    signInGoogle
  }
}
