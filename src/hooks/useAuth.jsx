/* eslint-disable camelcase */
import React, { useState, useContext, createContext } from 'react'

import axios from 'axios'

import Cookie from 'js-cookie'

import { useAuth0 } from '@auth0/auth0-react'

const AuthContext = createContext()

export function ProviderAuth ({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

function useProvideAuth () {
  const [user, setUser] = useState(null)
  const { logout } = useAuth0()

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json'
      }
    }

    console.log('Auth' + email, password)

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

    await axios.post('https://rental-app-server.herokuapp.com/api/v1/auth/change-password', { token, newPassword }, options)
  }

  const logOut = () => {
    Cookie.remove('token')
    const googleUser = window.localStorage.getItem('google')
    if (googleUser) { window.localStorage.removeItem('google') }
    window.localStorage.removeItem('user')
    setUser(null)
    delete axios.defaults.headers.Authorization
    logout({ returnTo: window.location.origin })
  }

  return {
    user,
    signIn,
    logOut,
    recovery,
    changePass
  }
}
