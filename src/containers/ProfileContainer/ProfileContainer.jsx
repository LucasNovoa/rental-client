import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './profileContainer.scss'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail'
import CreateHotel from '../../components/CreateHotel/CreateHotel'
import { getUser } from '../../redux/slices/userIdSlice'

const ProfileContainer = ({ user }) => {
  const dispatch = useDispatch()
  const [post, setPost] = useState(false)
  const currentUser = useSelector((state) => state.userId)

  useEffect(() => {
    dispatch(getUser(user?.id))
  }, [dispatch])

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <section className='profileContainer'>
      <ProfileCard user={currentUser?.userId} />
      {post === false &&
        <ProfileDetail user={currentUser?.userId} setPost={setPost} post={post} />}
      {post === true && <CreateHotel className='profileContainer__create' userId={user.id} submit={handleCreate} />}
    </section>
  )
}

export default ProfileContainer
