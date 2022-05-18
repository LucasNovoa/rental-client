import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Calendar.scss'

const Calendar = () => {
  const dispatch = useDispatch()
  const reservations = useSelector(selectReservation)
  const [startDate, setStartDate] = useState(reservations.checkIn !== 'Desde...' ? dateFormat(reservations.checkIn) : new Date())
  const [endDate, setEndDate] = useState(reservations.checkOut !== 'Hasta...' ? dateFormat(reservations.checkOut) : startDate)

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
    dispatch(updateReservation({
      checkIn: ranges.selection.startDate,
      checkOut: ranges.selection.endDate
    }))
    console.log(reservations)
  }

  return (
    <div className='calendarContainer'>
      <div className='calendar__check__calendar'>
        <h3>Check In - Check Out</h3>
        <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
          rangeColors={['#ff3f3f']}
          showDateDisplay={false}
          dateDisplayFormat='d MMM yyyy'
          months={2}
          direction='horizontal'
        />
      </div>
    </div>
  )
}

export default Calendar

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
