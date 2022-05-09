import './profiledetail.scss'
import { AiFillStar } from 'react-icons/ai'
import SliderHost from '../SliderHost/SliderHost'

import React from 'react'

const ProfileDetail = ({ user }) => {
  return (
    console.log(user.Hotels),
      <div className='profiledetail'>
        {user.firstName &&
          <h2 className='profiledetail__title'>¡Hola {user.firstName} {user.lastName}!</h2>}
        {user.organization &&
          <h2 className='profiledetail__title'>¡Hola {user.organization}!</h2>}
        <p className='profiledetail__date'> Se registró en {user.createdAt.split('-')[0]}</p>
        <h3 className='profiledetail__stars'> <AiFillStar /> 0 evaluaciones </h3>
        <div className='profiledetail__divider' />
        <p className='profiledetail__eva'>Evaluaciones hechas por vos</p>
        <div className='profiledetail__divider' />
        {user.Hotels.length > 0 &&
          <div>
            <SliderHost hotels={user.Hotels} />
          </div>}
      </div>
  )
}

export default ProfileDetail
