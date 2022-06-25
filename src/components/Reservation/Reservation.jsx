import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
// import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Reservation.scss'
// import { selectAllCities } from '../../redux/services/hotelsServices'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'
import swal from 'sweetalert'
import moment from 'moment'
moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

const Reservation = ({ hotel, setRes, res }) => {
  const reservations = useSelector(selectReservation)
  const userJSON = window.localStorage.getItem('user')
  const reservationFrom = moment(reservations.checkIn)
  const reservationTo = moment(reservations.checkOut)
  const totalNights = reservationTo.diff(reservationFrom, 'days')
  const dispatch = useDispatch()
  // const navigate = useNavigate()
  const [amount, setAmount] = useState(reservations.guests)
  // console.log(!userJSON)
  // console.log(reservations)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    let errors = ''
    if (!userJSON) {
      swal({
        title: '¡Atención!',
        text: 'Para reservar debes estar logueado',
        icon: 'warning'
      })
      // navigate('/login')
    } else {
      if (reservations.checkIn === 'Desde...') {
        errors += 'Selecciona fecha de Check In... \n'
      } else if (reservations.checkOut === reservations.checkIn) {
        errors += 'Selecciona fecha de Check Out... \n'
      }
      if (errors.length >= 1) {
        swal({
          title: '¡Atención!',
          text: `${errors}`,
          icon: 'warning'
        })
      } else {
        dispatch(updateReservation({
          totalNights
        }))
        setRes({
          ...res,
          open: true
        })
        window.scrollTo(0, 0)
      }
    }
  }

  const handleAmount = (e) => {
    if (e.target.name === '-') {
      if (amount === 1) return
      if (amount > 1) {
        setAmount(amount - 1)
        dispatch(updateReservation({
          guests: amount - 1
        }))
      }
    } else {
      setAmount(amount + 1)
      dispatch(updateReservation({
        guests: amount + 1
      }))
    }
  }

  return (
    <div className='reservationContainer'>
      <div className='reservation'>
        <div>
          <button className='reservation__check'>
            <h5 className='reservation__check__title'>Check-in</h5>
            <h5 className='reservation__check__value'>{reservations.checkIn === 'Desde...' ? reservations.checkIn : dateFormat(reservations.checkIn)}</h5>
          </button>
        </div>
        <button className='reservation__check'>
          <h5 className='reservation__check__title'>Check-out</h5>
          <h5 className='reservation__check__value'>{reservations.checkOut === 'Hasta...' ? reservations.checkOut : dateFormat(reservations.checkOut)}</h5>
        </button>
        <div className='reservation__amount'>
          <h5 className='reservation__amount__title'>Huéspedes</h5>
          <div className='reservation__amount__guests'>
            <button name='-' disabled={reservations.guests === 1} onClick={handleAmount} className='reservation__amount__guests__btn'>-</button>
            <h5 className='reservation__amount__guests__value'>{reservations.guests}</h5>
            <button name='+' disabled={reservations.guests === hotel.guests} onClick={handleAmount} className='reservation__amount__guests__btn'>+</button>
          </div>
        </div>
        <div className='reservation__btns'>
          <Link to='/hotels' className='reservation__btns__btn'>Volver</Link>
          <button className='reservation__btns__btn' onClick={handleSearch}>Reservar</button>
        </div>
      </div>
    </div>
  )
}

export default Reservation

function dateFormat (date) {
  const arr = date.toLocaleString('es-AR').split(' ')[0].split('/')
  let month = ''

  switch (arr[1]) {
    case '1': month = 'Ene'; break
    case '2': month = 'Feb'; break
    case '3': month = 'Mar'; break
    case '4': month = 'Abr'; break
    case '5': month = 'May'; break
    case '6': month = 'Jun'; break
    case '7': month = 'Jul'; break
    case '8': month = 'Ago'; break
    case '9': month = 'Sep'; break
    case '10': month = 'Oct'; break
    case '11': month = 'Nov'; break
    case '12': month = 'Dic'; break
  }

  return arr[0] + ' ' + month + ' ' + arr[2].slice(0, 4)
}
