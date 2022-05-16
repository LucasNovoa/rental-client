import { useEffect, useState } from 'react'
import ProfileFooter from '../components/ProfileFooter/ProfileFooter'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import Loader from '../components/Loader/Loader'
import '../scss/profile.scss'
import { getUsers, getUsersStatus, selectAllUsers } from '../redux/slices/userSlice'
// import { getUser } from '../redux/slices/userIdSlice'
import { useSelector, useDispatch } from 'react-redux'

const Profile = () => {
  const dispatch = useDispatch()
  const [userInfo, setUserInfo] = useState(null)
  // const allUsers = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

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
        <ProfileFooter />
        </div>
  )
}

export { Profile }
