import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import { getUsers, selectAllUsers } from '../redux/slices/userSlice'

const Profile = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  console.log(users[0])

  return (
    <div className='Profile'>
      <Header />
      <ProfileContainer user={users[0]} />
      <Footer />
    </div>
  )
}

export { Profile }
