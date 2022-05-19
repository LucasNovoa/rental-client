import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card/Card'
import Loader from '../../components/Loader/Loader'
import Pagination from '../../components/Pagination/Pagination'
import { selectAllHotels, useGetHotelsQuery } from '../../redux/services/hotelsServices'
import { selectFilters } from '../../redux/slices/filtersSlice'
import './hotelscontainer.scss'

export const HotelsContainer = ({ less, setLess, cap, setCap, filterPrice, filterStars, sortPrice, sortStars }) => {
  const filters = useSelector(selectFilters)
  const { city, otherFilters, ranges } = filters
  const hotels = city !== '' ? useSelector(selectAllHotels).filter(hotel => hotel.City.name === city) : useSelector(selectAllHotels)

  let otherFilteredHotels = hotels.sort(function (a, b) {
    if (a.price < b.price) {
      return 1
    }
    if (a.price > b.price) {
      return -1
    }
    return 0
  }).sort(function (a, b) {
    if (a.stars < b.stars) {
      return 1
    }
    if (a.stars > b.stars) {
      return -1
    }
    return 0
  })

  const {
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetHotelsQuery()

  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [filters])

  if (filterPrice.min && filterPrice.max) {
    otherFilteredHotels = otherFilteredHotels.filter(e => e.price >= filterPrice.min).filter(e => e.price <= filterPrice.max)
  }

  if (filterStars.min && filterStars.max) {
    otherFilteredHotels = otherFilteredHotels.filter(e => e.stars >= filterStars.min).filter(e => e.stars <= filterStars.max)
  }

  if (sortPrice === 'desc') {
    otherFilteredHotels.sort(function (a, b) {
      if (a.price > b.price) {
        return 1
      }
      if (a.price < b.price) {
        return -1
      }
      return 0
    })
  } else if (sortPrice === 'asc') {
    otherFilteredHotels.sort(function (a, b) {
      if (a.price < b.price) {
        return 1
      }
      if (a.price > b.price) {
        return -1
      }
      return 0
    })
  }

  if (sortStars === 'desc') {
    otherFilteredHotels.sort(function (a, b) {
      if (a.stars > b.stars) {
        return 1
      }
      if (a.stars < b.stars) {
        return -1
      }
      return 0
    })
  } else if (sortStars === 'asc') {
    otherFilteredHotels.sort(function (a, b) {
      if (a.stars < b.stars) {
        return 1
      }
      if (a.stars > b.stars) {
        return -1
      }
      return 0
    })
  }

  const filteredHotels = otherFilteredHotels?.slice(page * 8, page * 8 + 8)
  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    content = filteredHotels.map((h) => <Card img={h.mainImage} name={h.name} description={h.description} price={h.price} key={h.id} hosts={h.guests} stars={h.stars} filters={filters} />)
  } else if (isError) {
    content = <p>{error}</p>
  }

  const maxPage = otherFilteredHotels.length / 10

  return (
    console.log(filterPrice, ' ', filterStars),
      <section className='hotelscontainer'>
        <div className='hotelscontainer__cards'>
          {content}
        </div>
        <Pagination page={page} setPage={setPage} maxPage={maxPage} />
      </section>
  )
}
