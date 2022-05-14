import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import { createSelector } from '@reduxjs/toolkit'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const location = useLocation()
  const city = location.search.length > 0 ? decodeURI(decodeURI(useLocation().search.split('?')[1].slice(5))) : ''

  const hotels = city.length > 0 ? useSelector(selectAllHotels).filter(h => h.City.name === decodeURI(decodeURI(city))) : useSelector(selectAllHotels)
  /* const selectHotelsForCity = useMemo(() => {
    const emptyArray = []
    return createSelector(
      res => res.data,
      (res, city) => city,
      (data, city) => Object.values(data.entities)?.filter(hotel => hotel.City.name === city) ?? emptyArray
    )
  }) */

  /*   const { hotelsForCity } = useGetHotelsQuery(undefined, {
    selectFromResult: result => ({
      ...result,
      hotelsForCity: selectHotelsForCity(result, city)
    })
  }) */

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
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)
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
