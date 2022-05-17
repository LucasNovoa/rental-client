import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import Presentation from '../components/Presentation/Presentation'
import Slider from '../containers/Slider/Slider'
import Footer from '../components/Footer/Footer'
import { SearchBar } from '../components/SearchBar/SearchBar'
import Recommended from '../components/Recommended/Recommended'
import LoginButton from '../components/LoginButton'
import Logout from '../components/Logout'
import ProfileTest from './ProfileTest'

function Home () {
  return (
    <div className='Home'>
      <Header />
      <LoginButton />
      <ProfileTest />
      <Logout />
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
