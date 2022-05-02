import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import ProfileDetail from '../components/ProfileDetail/ProfileDetail';
import { getUsers, getUsersStatus, selectAllUsers } from '../redux/slices/userSlice';

function Profile() {
  const dispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(getUsers());
    }
  }, [usersStatus, dispatch]);

  console.log(users);
  return (
    <div className="Profile">
      <Header />
      <ProfileCard user={users[0]} />
      <ProfileDetail user={users[0]} />
    </div>
  );
}

export { Profile };
