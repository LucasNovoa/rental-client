import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileFooter from '../components/ProfileFooter/ProfileFooter'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import { getUsers, selectAllUsers } from '../redux/slices/userSlice'
import Loader from '../components/Loader/Loader'

const Profile = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  console.log(users.find(e => e.id === 51))
  const user = users.find(e => e.id === 51)

  return (
    !user
      ? <Loader />
      : <div className='Profile'>
        <Header />
        <ProfileContainer user={user} />
        <ProfileFooter />
        </div>
  )
}

export { Profile }
