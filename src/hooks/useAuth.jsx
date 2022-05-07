/* eslint-disable camelcase */
import React, { useState, useEffect, useContext, createContext } from 'react'

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

    const { data: access_token } = await axios.post('http://rental-app-server.herokuapp.com/api/v1/auth/login', { email, password }, options)

    if (access_token) {
      const token = access_token.token
      const userId = access_token.user.id

      Cookie.set('token', token, { expires: 5 })

      axios.defaults.headers.Authorization = `Bearer ${token}`

      const { data: user } = await axios.get(`http://rental-app-server.herokuapp.com/api/v1/users/${userId}`)

      setUser(user)
    }
  }

  const logout = () => {
    Cookie.remove('token')
    setUser(null)
    delete axios.defaults.headers.Authorization
    window.location.href = '/login'
  }

  return {
    user,
    signIn,
    logout
  }
}
