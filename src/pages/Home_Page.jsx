import React from 'react'
import Hero_Section from '../sections/Hero_Section'
import About_Section from '../sections/About_Section'
import Classes_Section from '@/sections/Classes_Section'
import Wten_Section from '@/sections/Wten_Section'
import Institute_Section from '@/sections/Institute_Section'
import Online_Register_Card from '@/components/Online_Register_Card'
import Contact_Section from '@/sections/Contact_Section'
import WeeklyWorksSection from '@/sections/WeeklyWorksSection'

const Home_Page = () => {
  return (
    <div className=' w-full h-full'>
      <section id='home'>
        <Hero_Section/>
      </section>
      <section id='registercard'>
        <Online_Register_Card/>
      </section>
      <section id='weekly'>
        <WeeklyWorksSection/>
      </section>
      <section id='about'>
        <About_Section/>
      </section>
      <section id='classes'>
        <Classes_Section/>
      </section>
      <section id='wten'>
        <Wten_Section/>
      </section>
      <section id='institutes'>
        <Institute_Section/>
      </section>
      <section id='contact'>
        <Contact_Section/>
      </section>
    </div>
  )
}

export default Home_Page