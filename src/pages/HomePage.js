import React from 'react'
import Sidebar from '../components/Sidebar';

const HomePage = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="content-area">
          {children}
        </div>
      </div>
    </>
  )
}

export default HomePage;