import AboutCompo from '../components/AboutComp/AboutCompo'
import Header from '../components/Header/Header'
import '../scss/globals.scss'

import Presentation from '../components/Presentation/Presentation'
import Slider from './Slider/Slider'
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <Presentation />
      <AboutCompo />
      <Slider />
      {children}
    </div>
  )
}

export { Layout }
