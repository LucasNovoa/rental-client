import React from 'react'
import './profilecard.scss'
import placeholder from '../../assets/p_placeholder.png'

function ProfileCard ({ user }) {
  return (
    <div className='profilecard'>
      <div className='profilecard__imageContainer'>
        <img className='profilecard__imageContainer__image' src={placeholder} alt='img' />
        <a>Actualizar foto</a>
      </div>
      <div className='profilecard__divider' />
      <div className='profilecard_data'>
        <h3>{user.userName}</h3>
        <h4>{user.name} {user.lastName}</h4>
        <p>Correo@electrónico.com</p>
        <p>Miembro desde:</p>
      </div>
    </div>
  )
}

export default ProfileCard
