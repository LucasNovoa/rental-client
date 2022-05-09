import './profiledetail.scss'
import { AiFillStar } from 'react-icons/ai'
import SliderHost from '../SliderHost/SliderHost'
import { selectAllHotels, getHotels, getHotelsStatus } from '../../redux/slices/hotelSlice'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'

const ProfileDetail = ({ user }) => {
  const dispatch = useDispatch()
  const hotels = useSelector(selectAllHotels)
  const hotelIdStatus = useSelector(getHotelsStatus)

  useEffect(() => {
    if (hotelIdStatus === 'idle') {
      dispatch(getHotels())
    }
  }, [])

  return (
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
      {hotels.length < 1 && <Loader />}
      <div>
        <SliderHost hotels={hotels?.filter(e => e.UserId === user.id)} />
      </div>
    </div>
  )
}

export default ProfileDetail
