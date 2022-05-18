import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import NotFoundComp from '../components/NotFoundComp/NotFoundComp'

import '../components/NotFoundComp/NotFound.scss'

export const NotFound = () => {
  return (
    <div className='notfound'>
      <NotFoundComp />
    </div>
  )
}
