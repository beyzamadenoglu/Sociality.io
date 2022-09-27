import React from 'react'
import Sidebar from '../components/Sidebar';
import Status from '../components/Statusbar';
import PostCard from '../components/PostCard';
import Profile from '../components/Profile';

const HomePage = () => {
  return (
    <>
        <Sidebar />
        <Status />
        <PostCard />
        <Profile />
    </>
  )
}

export default HomePage