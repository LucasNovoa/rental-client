import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { SearchBar } from '../components/SearchBar/SearchBar'
import FilterSort from '../components/FilterSort/FilterSort'
import { HotelsContainer } from '../containers/HotelsContainer/HotelsContainer'
import { getHotels, getHotelsStatus, getFilteredHotels } from '../redux/slices/hotelSlice'
import { getCities, getCitiesStatus } from '../redux/slices/citySlice'
import { selectAllFilters } from '../redux/slices/filterSlice'

export const Hotels = () => {
  const hotelStatus = useSelector(getHotelsStatus)
  const citiesStatus = useSelector(getCitiesStatus)
  const filters = useSelector(selectAllFilters)

  const dispatch = useDispatch()

  useEffect(() => {
    if (hotelStatus === 'idle') {
      dispatch(getHotels())
    }
    if (citiesStatus === 'idle') {
      dispatch(getCities())
    }
    dispatch(getFilteredHotels({
      guests: filters.guests,
      CityId: filters.cityId
    }))
  }, [citiesStatus, filters, dispatch])

  return (
    <div className='hotels'>
      <Header />
      <SearchBar />
      {/* <FilterSort /> */}
      <HotelsContainer />
      <Footer />
    </div>
  )
}
