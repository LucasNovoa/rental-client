import { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Loader from '../components/Loader/Loader'
import '../scss/profile.scss'

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')
    if (userJSON) {
      const user = JSON.parse(userJSON)

      setUserInfo(user)
    }
  }, [])

  return (
    !userInfo
      ? <Loader className='loader' />
      : <div className='Profile'>
        <Header />
        <ProfileContainer user={userInfo} />
        <Footer />
      </div>
  )
}

export { Profile }
