import { useEffect, useState } from 'react'
import ProfileFooter from '../components/ProfileFooter/ProfileFooter'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Loader from '../components/Loader/Loader'
import '../scss/profile.scss'
import { useAuth0 } from '@auth0/auth0-react'
import { useAuth } from '../hooks/useAuth'
import axios from 'axios'

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)
  const { user, isAuthenticated, isLoading } = useAuth0()

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
      ? <Loader className='loader' />
      : <div className='Profile'>
        <Header />
        <ProfileContainer user={userInfo} />
        <ProfileFooter />
      </div>
  )
}

export { Profile }
