import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Token: {token}</p>
    </div>
  );
};

export default Profile;
