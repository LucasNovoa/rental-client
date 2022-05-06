import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Pagination from '../../components/Pagination/Pagination'
import { selectAllHotels } from '../../redux/slices/hotelSlice'
import './hotelscontainer.scss'

export const HotelsContainer = () => {
  const hotels = useSelector(selectAllHotels)
  const [page, setPage] = useState(0)
  const maxPage = hotels.length / 10

  useEffect(() => {
    setPage(0)
  }, (hotels))

  const filteredHotels = hotels.slice(page * 8, page * 8 + 8)

  return (
    <section className='hotelscontainer'>
      <div className='hotelscontainer__cards'>
        {filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.maxPax} stars={h.stars} />)})
      </div>
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </section>
  )
}
