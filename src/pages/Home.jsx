import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import Slider from '../containers/Slider/Slider'
import Footer from '../components/Footer/Footer'
/* import { getHotels, getHotelsStatus, selectAllHotels } from '../redux/slices/hotelSlice'
import { getCities, getCitiesStatus } from '../redux/slices/citySlice' */
import { SearchBar } from '../components/SearchBar/SearchBar'
import Recommended from '../components/Recommended/Recommended'
/* import Recommended from '../components/Recommended/Recommended' */

function Home () {
/*   const dispatch = useDispatch()

  const hotels = useSelector(selectAllHotels)
  const hotelStatus = useSelector(getHotelsStatus)
  const citiesStatus = useSelector(getCitiesStatus) */

  /* useEffect(() => {
    if (hotelStatus === 'idle') {
      dispatch(getHotels())
    }
    if (citiesStatus === 'idle') {
      dispatch(getCities())
    }
  }, [hotelStatus, citiesStatus, dispatch]) */

  return (
    <div className='Home'>
      <Header />
      <SearchBar />
      <Presentation />
      <Recommended />
      <AboutCompo />
      <Slider />
      <Footer />
    </div>
  )
}

export { Home }
