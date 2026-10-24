import React from 'react'
import ChemistLogo from '../assets/chemist.png'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'

const Institute_Section = () => {
  return (
    <div className=' w-full h-full bg-black/50 flex flex-col items-center p-10 md:p-20'>
      <p data-aos="fade-up" data-aos-duration="3000" className=" text-white text-2xl font-semibold">අධ්‍යාපන ආයතන</p>
      <div className=' mt-20 flex justify-between space-x-10 w-full'>
        <div className=' w-full h-full flex justify-center'>
          <div data-aos="fade-up"
        data-aos-duration="3000" className=' bg-lime-100 rounded-2xl w-120 h-130 flex flex-col items-center'>
            <img src={ChemistLogo} alt="" className='w-full h-100 object-cover'/>
            <p className=' px-5 text-2xl font-semibold text-center text-emerald-700 text-shadow-2xs text-shadow-gray-500'>Chemist ඇකඩමිය</p>
            <p className=' px-5 text-xl text-center text-emerald-700 text-shadow-2xs text-shadow-gray-500'>Wennappuwa</p>
            <div className=' flex space-x-5 items-center text-red-600 pt-3'>
              <FaLocationDot/>
              <p className=' font-semibold'>මඩම පාර, වෙන්නප්පුව</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Institute_Section