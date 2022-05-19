/* eslint-disable react/jsx-closing-tag-location */
import { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Loader from '../components/Loader/Loader'
import '../scss/profile.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuth } from '../hooks/useAuth'
import axios from 'axios'
import swal from 'sweetalert'

const Profile = () => {
  // const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null)
  const { user, logout } = useAuth0()

  const auth = useAuth()
  if (user) {
    window.localStorage.setItem('google', JSON.stringify(user))
  }

  const userJSON = window.localStorage.getItem('user')
  const userGoogleJSON = window.localStorage.getItem('google')

  if (userGoogleJSON && !userJSON) {
    const awaitGoogle = async () => {
      const userGoogle = JSON.parse(userGoogleJSON)
      await axios.get(`https://rental-app-server.herokuapp.com/api/v1/users?email=${userGoogle?.email}`).then((res) => {
        auth.signIn(res?.data.email, 'rental')
      }).catch(() => {
        window.localStorage.removeItem('google')
        swal({
          title: 'Debes Registrarte',
          text: 'Debes Registrarte para Ingresar con Google',
          icon: 'warning',
          button: {
            text: 'Registrarme'
          }
        }).then(() => logout({ returnTo: 'http://localhost:3000/register' }))
      })
    }
    awaitGoogle()
  }

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')
    if (userJSON) {
      const userLocal = JSON.parse(userJSON)

      setUserInfo(userLocal)
    }
  }, [userJSON])

  return (

    !userInfo
      ? <Loader className='loader' user={userInfo} />
      : <div className='Profile'>
        <Header />
        <ProfileContainer user={userInfo} />
        <Footer />
      </div>
  )
}

export { Profile }
