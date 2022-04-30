import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import Slider from '../containers/Slider/Slider'
import { getHotels, getHotelsStatus, selectAllHotels } from '../redux/slices/hotelSlice'

const Home = () => {
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
      <Presentation />
      <AboutCompo />
      <Slider hotels={hotels} />
    </div>
  )
}

export { Home }
