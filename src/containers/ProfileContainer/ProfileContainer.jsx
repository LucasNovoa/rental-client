import React, { useState } from 'react'
import './profileContainer.scss'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileDetail from '../../components/ProfileDetail/ProfileDetail'
import CreateHotel from '../../components/CreateHotel/CreateHotel'

const ProfileContainer = ({ user }) => {
  const [post, setPost] = useState(false)

  function handleCreate (e) {
    e.preventDefault()
    setPost(!post)
  }

  return (
    <section className='profileContainer'>
      <ProfileCard user={user} />
      {post === false &&
        <ProfileDetail user={user} setPost={setPost} post={post} />}
      {post === false &&
        <button className='profileContainer__button' onClick={e => handleCreate(e)}>Publica tu alojamiento!</button>}
      {post === true && <CreateHotel className='profileContainer__create' userId={user.id} submit={handleCreate} />}
    </section>
  )
}

export default ProfileContainer
