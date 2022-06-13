import React, { useState } from 'react'
import './profileContainer.scss'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail'
import CreateHotel from '../../components/CreateHotel/CreateHotel'
import { useGetUserDetailQuery } from '../../redux/services/usersServices'
import Loader from '../../components/Loader/Loader'

const ProfileContainer = ({ user }) => {
  const [post, setPost] = useState(false)

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
    content = (
      <section className='profileContainer'>
        <ProfileCard user={user} />
        {
          post === false &&
            <ProfileDetail user={user} setPost={setPost} post={post} />
        }
        {
          post === true &&
            <CreateHotel className='profileContainer__create' userId={user.id} submit={handleCreate} />
        }
      </section>
    )
  } else if (isError) {
    content = { error }
  }

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (content)
}

export default ProfileContainer
