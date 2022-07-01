import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import { selectReservation, updateReservation } from '../../redux/slices/reservationSlice'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Calendar.scss'

const Calendar = () => {
  const dispatch = useDispatch()
  const reservations = useSelector(selectReservation)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(startDate)

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
