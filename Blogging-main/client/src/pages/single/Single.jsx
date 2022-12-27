import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import './Single.css'
const Single = () => {
  return (
    <>
      <Navbar/>
      <div className="single">
        <SinglePost/>
        <Sidebar />
      </div>
      
    </>
  )
}

export default Single