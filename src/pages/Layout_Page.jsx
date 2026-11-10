import React, { useEffect } from 'react'
import Home_Page from './Home_Page'
import Navbar from '../components/Navbar'
import BgImage from '../assets/bgimg3.webp'
import Aos from 'aos'
import "aos/dist/aos.css";
import Footer from '@/components/Footer'

const Layout_Page = () => {

  useEffect(()=>{
    Aos.init({
      once: true,
    });
  },[])

  return (
    <div className="relative isolate w-full min-h-screen overflow-clip">
      {/* Fixed background layer */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${BgImage}")`,
        }}
        aria-hidden="true"
      />

      {/* Page content */}
      <div className="relative w-full">
        <div className="absolute z-50 top-0 left-0">
          <Navbar />
        </div>

        <Home_Page />
      </div>

      <Footer />
    </div>
  )
}

export default Layout_Page