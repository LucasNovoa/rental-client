import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './profileContainer.scss'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail'
import CreateHotel from '../../components/CreateHotel/CreateHotel'
import { selectUserById, useGetUserDetailQuery } from '../../redux/services/usersServices'
import Loader from '../../components/Loader/Loader'

const ProfileContainer = ({ user }) => {
  const dispatch = useDispatch()
  const [post, setPost] = useState(false)
  const currentUser = useSelector((state) => state.userId)

  useEffect(() => {
    dispatch(getUser(user?.id))
  }, [dispatch])

  const {
    data: userForId,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserDetailQuery(user.id)

  let content

  if (isLoading) {
    content = <Loader />
  } else if (isSuccess) {
    const { ids, entities } = userForId
    const user = entities[ids[0]]
    console.log(user)
    content = (
      <>
        <ProfileCard user={user} />
        {post === false &&
          <ProfileDetail user={user} setPost={setPost} post={post} />}
        {post === true && <CreateHotel className='profileContainer__create' userId={user.id} submit={handleCreate} />}
      </>
    )
  } else if (isError) {
    content = { error }
  }

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <section className='profileContainer'>
      {content}
    </section>
  )
}

export default ProfileContainer
