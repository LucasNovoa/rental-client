import React from 'react'
import './profilecard.scss'

function ProfileCard ({ user }) {
  return (
    <div className='profilecard'>
      <div className='profilecard__imageContainer'>
        <img className='profilecard__imageContainer__image' src={user.profilePic} alt='img' />
        <a>Actualizar foto</a>
      </div>
      <div className='profilecard__divider' />
      <div className='profilecard__data'>
        <h3 className='profilecard__data__username'>{user.userName}</h3>
        <p className='profilecard__data__name'>{user.name} {user.lastName}</p>
        <h4 className='profilecard__data__email'>{user.email}</h4>
        <h4 className='profilecard__data__since'>Miembro desde: {user.createdAt.split('-')[0]}</h4>
      </div>
    </div>
  )
}

export default ProfileCard
