import React from 'react'
import Header from '../Header/Header'
import './Loader.scss'

export default function Loader () {
  return (
    <>
      <Header />
      <div>
        <div className='lds-roller'><div /><div /><div /><div /><div /><div /><div /><div /></div>
      </div>
    </>
  )
}
