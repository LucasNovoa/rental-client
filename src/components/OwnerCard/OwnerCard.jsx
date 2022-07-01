import React from 'react'
import './userhotelcard.scss'
import { useSelector } from 'react-redux'
import { selectUserById } from '../../redux/services/usersServices'

const OwnerCard = ({ userId }) => {
  const user = useSelector(state => selectUserById(state, userId))

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
export default OwnerCard
