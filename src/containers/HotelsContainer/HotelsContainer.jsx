import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { getHotelsError, getHotelsStatus, selectAllHotels, selectFilteredHotels } from '../../redux/slices/hotelSlice'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const hotels = useSelector(selectFilteredHotels)
  const status = useSelector(getHotelsStatus)
  const error = useSelector(getHotelsError)
  const [page, setPage] = useState(0)

  const maxPage = hotels.length / 10

  useEffect(() => {
    setPage(0)
  }, [hotels])

  const filteredHotels = hotels?.slice(page * 8, page * 8 + 8)
  let content
  if (status === 'loading') {
    content = <Loader />
  } else if (status === 'succeeded') {
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)
  } else if (status === 'failed') {
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
