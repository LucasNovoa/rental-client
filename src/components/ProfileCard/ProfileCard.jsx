import React, { useState } from 'react'
import './profilecard.scss'
import Picture from '../Picture/Picture.jsx'

function ProfileCard ({ user }) {
  const [on, setOn] = useState(false)

  function handleClick (e) {
    e.preventDefault()
    setOn(true)
  }

  return (
    <div className='profilecard'>
      <div className='profilecard__imageContainer'>
        {
          !on &&
            <>
              <img className='profilecard__imageContainer__image' src={user?.image} alt='img' />
              <br />
              <a onClick={e => handleClick(e)}>Actualizar foto</a>
            </>
        }
        {
          on && <Picture user={user} setOn={setOn} />
        }
      </div>
      <div className='profilecard__divider' />
      <div className='profilecard__data'>
        {
          user?.typePerson === 'legal' &&
            <>
              <p className='profilecard__data__name'>{user?.organization}</p>
              <p className='profilecard__data__email'>{user?.email}</p>
            </>
        }
        {
          user?.typePerson === 'natural' &&
            <>
              <p className='profilecard__data__name'>{user?.firstName} {user?.lastName}</p>
              <p className='profilecard__data__email'>{user?.email}</p>
            </>
        }
      </div>
    </div>
  )
}

export default ProfileCard
