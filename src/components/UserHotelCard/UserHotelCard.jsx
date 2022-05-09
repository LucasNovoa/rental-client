import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './userhotelcard.scss'

const UserHotelCard = ({ userId }) => {
  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get(`https://rental-app-server.herokuapp.com/api/v1/users/${userId}`).then(r => setUser(r.data))
    console.log(user)
  }, [])

  return (
    <div className='userhotelcard'>
      <div className='userhotelcard__data'>
        <div className='userhotelcard__data__info'>
          <h3 className='userhotelcard__data__info__name'>Anfitrión: {user.firstName} {user.lastName}</h3>
          <p>Email: {user.email}</p>
        </div>
        <img src={user.image} alt='profilePic' className='userhotelcard__data__image' />
      </div>
    </div>
  )
}

export default UserHotelCard
