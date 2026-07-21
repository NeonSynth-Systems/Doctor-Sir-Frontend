import React, { useEffect } from 'react'
import Home_Page from './Home_Page'
import Navbar from '../components/Navbar'
import BgImage from '../assets/bgimg3.webp'
import Aos from 'aos'
import "aos/dist/aos.css";

const Layout_Page = () => {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className=' w-full min-h-screen bg-cover bg-fixed' style={{ backgroundImage: `url(${BgImage})` }}>
      <div className=' w-full h-full relative'>
        <div className=' absolute z-50 top-0 left-0 '>
          <Navbar/>
        </div>
        <Home_Page/>
      </div>
    </div>
  )
}

export default Layout_Page