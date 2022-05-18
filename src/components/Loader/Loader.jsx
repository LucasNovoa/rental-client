import React, { useEffect } from 'react'
import Header from '../Header/Header'
import './Loader.scss'
import { useNavigate } from 'react-router'

export default function Loader ({ user }) {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 7000)
  }, [user])
  return (
    <>
      <div className='loader'>
        <div className='loader__lds-roller'><div /><div /><div /><div /><div /><div /><div /><div /></div>
      </div>
    </>
  )
}
