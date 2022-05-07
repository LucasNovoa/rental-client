import './profiledetail.scss'
import { AiFillStar } from 'react-icons/ai'

import React from 'react'

const ProfileDetail = ({ user }) => {
  console.log(user)
  return (
    <div className='profiledetail'>
      <h2 className='profiledetail__title'>¡Hola {user.firstName} {user.lastName}!</h2>
      <p className='profiledetail__date'> Se registró en {user.createdAt.split('-')[0]}</p>
      <h3 className='profiledetail__stars'> <AiFillStar /> 0 evaluaciones </h3>
      <div className='profiledetail__divider' />
      <p className='profiledetail__eva'>Evaluaciones hechas por vos</p>
      <div className='profiledetail__divider' />
    </div>
  )
}

export default ProfileDetail
