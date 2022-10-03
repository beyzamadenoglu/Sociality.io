import React from 'react'
import ProfileImage from '../assets/Images/Image/Profile.png';

const Profile = () => {
  return (
    <div className="profile-picture">
        <img src={ProfileImage} alt="Profile"></img>
    </div>
  )
}

export default Profile