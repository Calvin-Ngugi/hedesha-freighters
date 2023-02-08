import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='hero'>
        <Navbar/>
        <hr/>
        <Hero/>
    </div>
  )
}

export default Home