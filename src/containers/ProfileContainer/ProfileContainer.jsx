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
<<<<<<< HEAD
        <ProfileDetail user={currentUser?.userId} setPost={setPost} post={post} />}
=======
        <ProfileDetail user={user} setPost={setPost} post={post} />}
      {post === false &&
        <button className='profileContainer__button' onClick={e => handleCreate(e)}>Publica tu alojamiento!</button>}
>>>>>>> 66bc72189f8d6ba248efa9aeb753c936321bd203
      {post === true && <CreateHotel className='profileContainer__create' userId={user.id} submit={handleCreate} />}
    </section>
  )
}

export default ProfileContainer
