import './profiledetail.scss'
import SliderHost from '../SliderHost/SliderHost'
import { selectAllHotels, getHotels, getHotelsStatus } from '../../redux/slices/hotelSlice'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../Loader/Loader'
import SliderBooking from '../SliderBooking/SliderBooking'
import Bookings from '../Bookings/Bookings'

const ProfileDetail = ({ user, post, setPost }) => {
  const dispatch = useDispatch()
  const hotels = useSelector(selectAllHotels)
  const hotelIdStatus = useSelector(getHotelsStatus)
  const hostHotels = user?.Hotels
  const bookings = user?.Bookings
  const [book, setBook] = useState(0)

  useEffect(() => {
    if (hotelIdStatus === 'idle') {
      dispatch(getHotels())
    }
  }, [])
<<<<<<< HEAD
  // function handleBook (e) {
  //   // e.preventDefault()
  //   setBook(e)
  // }
=======

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }
>>>>>>> 91cc200bfe522f2108704f985b620e6d318feb59

  return (
    <div className='profiledetail'>
      {!user.organization &&
        <h2 className='profiledetail__title'>¡Hola {user.firstName} {user.lastName}!</h2>}
      {user.organization &&
        <h2 className='profiledetail__title'>¡Hola {user.organization}!</h2>}
      <p className='profiledetail__date'> Se registró en {user.createdAt.split('-')[0]}</p>
      {user.role === 'owner' ? <h3>Propietario</h3> : <h3>Huésped</h3>}
      {post === false &&
        <button className='profiledetail__post' onClick={e => handleCreate(e)}>Publica tu alojamiento!</button>}
      <div className='profiledetail__divider' />
      {!hotels && <Loader />}
      {hostHotels.length > 0
        ? <div>
          <SliderHost className='profiledetail__slider' hotels={hostHotels} />
          <div className='profiledetail__divider' />
        </div>
        : <h1>No tienes alojamientos en alquiler</h1>}
      <div className='profiledetail__divider' />
      {user?.Bookings.length > 0 &&
        <div>
          {book !== 0 && <Bookings setBook={setBook} book={book} bookings={bookings} user={user} />}
          {book === 0 && <SliderBooking hotels={hotels} user={user} bookings={bookings} setBook={setBook} book={book} />}
        </div>}
    </div>
  )
}

export default ProfileDetail
