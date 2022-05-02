import './profiledetail.scss'
import { AiFillStar } from 'react-icons/ai'

import React from 'react'

const ProfileDetail = ({ user }) => {
  console.log(user)
  return (
    <div className='profiledetail'>
      <h2>¡Hola! Soy {user.name}...</h2>
      <p>Se registró en {user.createdAt.split('-')[1]}</p>
      <h3><AiFillStar /> 0 evaluaciones </h3>
      <div className='profiledetail__divider' />
      <p>Evaluaciones hechas por vos</p>
      <div className='profiledetail__divider' />
    </div>
  )
}

export default ProfileDetail
