import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
import { getUsers, selectAllUsers } from '../redux/slices/userSlice'

const Profile = () => {
  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  console.log(users)

  return (
    <div className='Profile'>
      <Header />
      <ProfileContainer user={users[0]} />
    </div>
  )
}

export { Profile }
