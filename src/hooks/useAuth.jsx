/* eslint-disable camelcase */
import React, { useState, useContext, createContext } from 'react'

import axios from 'axios'

import Cookie from 'js-cookie'

const AuthContext = createContext()

export function ProviderAuth ({ children }) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

function useProvideAuth () {
  const [user, setUser] = useState(null)

  const options = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json'
    }
  }

  const signIn = async (email, password) => {
    const { data: access_token } = await axios.post('http://polar-waters-05125.herokuapp.com/api/v1/auth/login', { email, password }, options)

    console.log(access_token.token)

    console.log(access_token.user)

    if (access_token) {
      Cookie.set('token', access_token.token, { expires: 5 })

      axios.defaults.headers.Authorization = `Bearer ${access_token.token}`
    }
  }

  return {
    user,
    signIn
  }
}
