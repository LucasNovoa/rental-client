import React from 'react'
import Header from '../Header/Header'
import './Loader.scss'

export default function Loader () {
  return (
    <>
      <div className='loader'>
        <div className='loader__lds-roller'><div /><div /><div /><div /><div /><div /><div /><div /></div>
      </div>
    </>
  )
}
