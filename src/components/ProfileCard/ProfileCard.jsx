import React from 'react'
import './profilecard.scss'

function ProfileCard ({ user }) {
  return (
    console.log(user),
      <div className='profilecard'>
        <div className='profilecard__imageContainer'>
          <img className='profilecard__imageContainer__image' src={user.image} alt='img' />
          <a>Actualizar foto</a>
        </div>
        <div className='profilecard__divider' />
        <div className='profilecard__data'>
          {user.typePerson === 'legal' && <h3 className='profilecard__data__username'>{user.organization}</h3>}
          {user.typePerson === 'natural' &&
            <>
              <p className='profilecard__data__name'>{user.firstName} {user.lastName}</p>
              <h4 className='profilecard__data__email'>{user.email}</h4>
              <h4 className='profilecard__data__since'>Miembro desde: {user.createdAt.split('-')[0]}</h4>
            </>}
        </div>
      </div>
  )
}

export default ProfileCard
