import React, { useEffect } from 'react'
import './Loader.scss'

export default function Loader () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='main__container'>
      <div className='spinner__container'>
        <div className='spinner' />
      </div>
    </div>
  )
}
