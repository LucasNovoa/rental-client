import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import { selectFilters } from '../../redux/slices/filtersSlice'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const filters = useSelector(selectFilters)
  const { city, otherFilters } = filters
  const hotels = city !== '' ? useSelector(selectAllHotels).filter(hotel => hotel.City.name === city) : useSelector(selectAllHotels)

  const otherFilteredHotels = hotels.filter(function (hotel) {
    for (const key in otherFilters) {
      if (hotel[key] === undefined || hotel[key] != otherFilters[key]) { return false }
    }
    return true
  })
  console.log(otherFilteredHotels)
  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  const [page, setPage] = useState(0)

  const maxPage = otherFilteredHotels.length / 10

  useEffect(() => {
    setPage(0)
  }, [otherFilteredHotels])

  const filteredHotels = otherFilteredHotels?.slice(page * 8, page * 8 + 8)
  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.guests} stars={h.stars} filters={filters} />)
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <section className='hotelscontainer'>
      <div className='hotelscontainer__cards'>
        {content}
      </div>
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </section>
  )
}
