import React from 'react'
import Hero from '../Components/MainPage/Main/index'
import Testimonial from '../Components/MainPage/Info/index'
import Statistics from '../Components/MainPage/Statistics/index'
import Image from '../Components/MainPage/Image/Index'
function Home() {
  return (
    <div>
            
            <Hero/>
      <Testimonial/>
      <Statistics/>
      <Image/>

    </div>
  )
}

export default Home