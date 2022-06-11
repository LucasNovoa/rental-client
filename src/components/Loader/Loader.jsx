import React from 'react'
import './Loader.scss'

export default function Loader () {
  return (
    <div className='main__container'>
      <div className='spinner__container'>
        <div className='spinner' />
      </div>
    </div>
  )
}
