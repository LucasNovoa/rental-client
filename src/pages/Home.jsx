import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import Slider from '../containers/Slider/Slider'
import Footer from '../components/Footer/Footer'
import { SearchBar } from '../components/SearchBar/SearchBar'
import Recommended from '../components/Recommended/Recommended'

function Home () {
  return (
    <div className='Home'>
      <Header />
      <SearchBar />
      <Presentation />
      <Recommended />
      <Slider />
      <AboutCompo />
      <Footer />
    </div>
  )
}

export { Home }
