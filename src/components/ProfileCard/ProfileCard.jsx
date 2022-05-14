import React from 'react'
import './profilecard.scss'

function ProfileCard ({ user }) {
  return (
    <div className='profilecard'>
      <div className='profilecard__imageContainer'>
        <img className='profilecard__imageContainer__image' src={user.image} alt='img' />
        <a>Actualizar foto</a>
      </div>
      <div className='profilecard__divider' />
      <div className='profilecard__data'>
        {user.typePerson === 'legal' &&
          <>
            <p className='profilecard__data__name'>{user.organization}</p>
            <p className='profilecard__data__email'>{user.email}</p>
          </>}
        {user.typePerson === 'natural' &&
          <>
            <p className='profilecard__data__name'>{user.firstName} {user.lastName}</p>
            <p className='profilecard__data__email'>{user.email}</p>
          </>}
      </div>
    </div>
  )
}

export default ProfileCard
