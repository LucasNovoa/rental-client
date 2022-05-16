import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const location = useLocation()
  const filters = location.state

  /* const hotels = useSelector(selectAllHotels).filter(function (hotel) {
    for (const key in filters) {
      if (hotel[key] === undefined || hotel[key] !== filters[key]) { return false }
    }
    return true
  }) */

  const hotels = filters ? useSelector(selectAllHotels).filter(hotel => hotel.City.name === filters.city) : useSelector(selectAllHotels)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  const [page, setPage] = useState(0)

  const maxPage = hotels.length / 10

  useEffect(() => {
    setPage(0)
  }, [hotels])

  const filteredHotels = hotels?.slice(page * 8, page * 8 + 8)
  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} filters={filters} />)
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
