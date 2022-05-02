import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProviderAuth } from '../hooks/useAuth'

import { Layout } from '../containers/Layout'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Login } from '../pages/Login'
import Register from '../pages/Register'

function App () {
  return (
    <ProviderAuth>
      <div className='App'>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </ProviderAuth>
  )
}

export { App }
