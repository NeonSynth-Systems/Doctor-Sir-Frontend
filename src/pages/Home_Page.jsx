import React from 'react'
import Hero_Section from '../sections/Hero_Section'
import About_Section from '../sections/About_Section'
import Classes_Section from '@/sections/Classes_Section'

const Home_Page = () => {
  return (
    <div className=' w-full h-full'>
      <section id='home'>
        <Hero_Section/>
      </section>
      <section id='about'>
        <About_Section/>
      </section>
      <section id='classes'>
        <Classes_Section/>
      </section>
    </div>
  )
}

export default Home_Page