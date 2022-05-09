import { useEffect, useState } from 'react'
import ProfileFooter from '../components/ProfileFooter/ProfileFooter'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Loader from '../components/Loader/Loader'

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
      ? <Loader />
      : <div className='Profile'>
        <Header />
        <ProfileContainer user={userInfo} />
        <ProfileFooter />
      </div>
  )
}

export { Profile }
