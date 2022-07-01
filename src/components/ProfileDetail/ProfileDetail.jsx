import './profiledetail.scss'
import SliderHost from '../SliderHost/SliderHost'
/* import { selectAllHotels, getHotels, getHotelsStatus } from '../../redux/slices/hotelSlice'
 */import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import SliderBooking from '../SliderBooking/SliderBooking'
import Bookings from '../Bookings/Bookings'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import Reviews from '../Review/Reviews.jsx'

const ProfileDetail = ({ user, post, setPost }) => {
  const dispatch = useDispatch()
  const hotels = useSelector(selectAllHotels)
  const hostHotels = user?.Hotels
  const userBookings = user?.Bookings
  const [book, setBook] = useState(0)
  const [rev, setRev] = useState(0)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = console.log('Alojamientos cargados con éxito')
  } else if (isError) {
    content = <p>{error}</p>
  }

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <div className='profiledetail'>
      {content}
      {
        !user?.organization &&
          <h1 className='profiledetail__title'>¡Hola {user?.firstName} {user?.lastName}!</h1>
      }
      {
        user?.organization &&
          <h1 className='profiledetail__title'>¡Hola {user?.organization}!</h1>
      }
      {
        user?.role === 'owner' ? <h4>(Propietario)</h4> : <h4>(Huésped)</h4>
      }
      {
        post === false &&
          <div className='profiledetail__btns'>
            <Link to='/hotels' className='profiledetail__btns__search'>Explorar Alojamientos</Link>
            <button className='profiledetail__btns__post' onClick={e => handleCreate(e)}>¡Publica el tuyo!</button>
          </div>
      }
      <div className='profiledetail__divider' />
      {
        userBookings?.length > 0
          ? <div>
            {book !== 0 && rev === 0 && <Bookings setBook={setBook} book={book} userBookings={userBookings} user={user} rev={rev} setRev={setRev} />}
            {book === 0 && rev === 0 && <SliderBooking hotels={hotels} user={user} userBookings={userBookings} setBook={setBook} book={book} />}
            {rev !== 0 && <Reviews setRev={setRev} book={book} userBookings={userBookings} user={user} setBook={setBook} />}
            </div>
          : <p className='profiledetail__alert'>Aún no realizaste Reservas...</p>
      }
      <div className='profiledetail__divider' />
      <div className='profiledetail__divider' />
      {
        hostHotels?.filter(e => e.isDeleted === false).length > 0
          ? <div>
            <SliderHost className='profiledetail__slider' hotels={hostHotels} />
            </div>
          : user.role === 'customer'
            ? <p className='profiledetail__alert'>No tienes Alojamientos para ofrecer...</p>
            : user.role === 'owner' && <p className='profiledetail__alert'>No tienes Alojamientos habilitados...</p>
      }
      <div className='profiledetail__divider' />
    </div>
  )
}

export default ProfileDetail
