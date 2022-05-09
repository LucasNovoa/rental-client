import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProviderAuth } from '../hooks/useAuth'

import { Layout } from '../containers/Layout'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { Login } from '../pages/Login'
import { Hotels } from '../pages/Hotels'
import Hotel from '../pages/Hotel'
import Register from '../pages/Register'

import { About } from '../pages/About'

import { PasswordRecovery } from '../pages/PasswordRecovery'

// import { ChangePassword } from '../pages/ChangePassword'

function App () {
  return (
    <ProviderAuth>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/hotels/' element={<Hotels />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/hotel/:name' element={<Hotel />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about' element={<About />} />
            <Route path='/passwordRecovery' element={<PasswordRecovery />} />
            {/* <Route path='/changePassword' element={<ChangePassword />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </ProviderAuth>
  )
}

export { App }
