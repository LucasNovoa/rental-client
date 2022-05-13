import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { apiSlice } from '../../redux/api/apiSlice'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/apiServices'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const filters = useLocation().search.split('?').splice(1).map(f => f.split('='))

  const hotels = filters.length >= 1 ? useSelector(selectAllHotels).filter(h => h.City.name === decodeURI(decodeURI(filters[0][1]))) : useSelector(selectAllHotels)

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  console.log(isLoading)

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
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)
  } else if (isError) {
    content = <p>{error}</p>
  }

  return (
    <section className='hotelscontainer'>
      <div className='hotelscontainer__cards'>
        {content}
        {filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)})
      </div>
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </section>
  )
}
