
import React from 'react'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Post from '../components/Post'


const Home = () => {
  return (
    <div className='container'>
      
      <Navbar/>
      <Post/>
      <Sidebar/>
      
      
    </div>
  )
}

export default Home