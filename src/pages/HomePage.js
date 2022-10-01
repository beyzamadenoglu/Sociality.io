import React from 'react'
import Sidebar from '../components/Sidebar';
import Status from '../components/Statusbar';
import Profile from '../components/Profile';
import Publishes from '../components/Publishes';

const HomePage = () => {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          <Status />
          <Profile/>
          <Publishes />
        </div>
      </div>
    </>
  )
}

export default HomePage