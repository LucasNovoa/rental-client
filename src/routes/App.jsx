import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '../containers/Layout'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export { App }
