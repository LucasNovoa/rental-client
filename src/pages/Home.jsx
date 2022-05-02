import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import Slider from '../containers/Slider/Slider'
import Footer from '../components/Footer/Footer'
import { getHotels, getHotelsStatus, selectAllHotels } from '../redux/slices/hotelSlice'
import { SearchBar } from '../components/SearchBar/SearchBar'

function Home () {
  const dispatch = useDispatch()

  const hotels = useSelector(selectAllHotels)
  const hotelStatus = useSelector(getHotelsStatus)

  useEffect(() => {
    if (hotelStatus === 'idle') {
      dispatch(getHotels())
    }
  }, [hotelStatus, dispatch])

  return (
    <div className='Home'>
      <Header />
      <SearchBar />
      <Presentation />
      <AboutCompo />
      <Slider hotels={hotels} />
      <Footer />
    </div>
  )
}

export { Home }
