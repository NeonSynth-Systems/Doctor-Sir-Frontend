import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth_Page = () => {
  return (
    <div className=' w-full h-full overflow-hidden'>
        <Outlet/>
    </div>
  )
}

export default Auth_Page