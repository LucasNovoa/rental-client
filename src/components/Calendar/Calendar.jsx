import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './Calendar.scss'
import { filterHotels } from '../../redux/slices/hotelSlice'
import { selectAllCities } from '../../redux/slices/citySlice'
import { filter, selectAllFilters } from '../../redux/slices/filterSlice'
import { useNavigate } from 'react-router-dom'

const Calendar = () => {
  const filters = useSelector(selectAllFilters)

  const dispatch = useDispatch()

  const [startDate, setStartDate] = useState(filters.checkIn === 'Desde...' ? new Date() : filters.checkIn)
  const [endDate, setEndDate] = useState(filters.checkOut === 'Hasta...' ? startDate : filters.checkOut)

  useEffect(() => {
    dispatch(filter({
      checkIn: startDate,
      checkOut: endDate
    }))
  }, [startDate, endDate])

  const selectionRange = {
    startDate,
    endDate,
    key: 'selection'
  }

  const handleSelect = ranges => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
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
