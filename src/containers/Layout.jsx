import AboutCompo from '../components/AboutComp/AboutCompo'
import Card from '../components/Card/Card'
import Header from '../components/Header/Header'
import '../scss/globals.scss'
import imageTest from '../assets/images/about1.jpeg'
import Presentation from '../components/Presentation/Presentation'
const Layout = ({ children }) => {
  return (
    <div className='Layout'>
      <Header />
      <Presentation />
      <AboutCompo />
      <Card img={imageTest} name='Hotel Prueba' description='Este es un hotel de prueba' price='99' />
      {children}
    </div>
  )
}

export { Layout }
