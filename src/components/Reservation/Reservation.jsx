import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Reservation.scss'
import { useNavigate } from 'react-router-dom'
import { selectAllCities } from '../../redux/services/hotelsServices'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'
import swal from 'sweetalert'
const Reservation = ({ hotel, setRes, res }) => {
  const reservations = useSelector(selectReservation)
  const dispatch = useDispatch()
  const userJSON = window.localStorage.getItem('user')
  const navigate = useNavigate()
  console.log(!userJSON)
  /* const cities = useSelector(selectAllCities)

   */
  /*
  const [results, setResults] = useState(false)
  const [renderCalendar, setRenderCalendar] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)
  const [renderCalendar, setRenderCalendar] = useState(false)
  const [renderAmount, setRenderAmount] = useState(false)
  const [amount, setAmount] = useState(reservations.guests ?? 1)

  const [place, setPlace] = useState()
  const [start, setStart] = useState()
  const [end, setEnd] = useState()
  const [guests, setGuests] = useState()

  const cityId = cities.find(e => e.name === place) && cities.find(e => e.name === place).id

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  } */

  /*   const totalNights = end.split(' ')[0] - start.split(' ')[0]
 */

  const handleSearch = (e) => {
    e.preventDefault()
    let errors = ''
    if (!userJSON) {
      navigate('/login')
    } else {
      if (reservations.checkIn === 'Desde...') {
        errors += 'Seleccione fecha de Check in... \n'
      } else if (reservations.checkOut === 'Hasta...') {
        errors += 'Selecciones fecha de Check out... \n'
      }
      if (errors.length >= 1) {
        swal({
          title: 'Verifique la información ingresada',
          text: `${errors}`
        })
      } else {
        const totalNights = reservations.checkOut.toDateString().split(' ')[2] - reservations.checkIn.toDateString().split(' ')[2]
        dispatch(updateReservation({
          totalNights
        }))
        setRes({
          ...res,
          open: true
        })
      }
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
        <div>
          <button className='reservation__amount'>
            <h5 className='reservation__amount__title'>Huéspedes</h5>
            <h5 className='reservation__amount__value'>{reservations.guests}</h5>
          </button>
        </div>
        <button className='reservation__btn' onClick={handleSearch}>Reservar</button>
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

  return arr[0] + ' ' + month + ' ' + arr[2]
}
