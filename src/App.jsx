import React from 'react'
import Navbar from './ccomponents/Navbar'
import HeroSection from './ccomponents/HeroSection'
import AboutSection from './ccomponents/AboutSection'
import Skill from './ccomponents/Skill'
import Projets from './ccomponents/Projets'

const App = () => {
  return (
    <div className=' w-full flex flex-col' style={{backgroundColor: "var(--bg)"}}>
      <Navbar />
      <section id='heroSecton'>
        <HeroSection />
      </section>
      <section id='about'>
        
      <AboutSection />
      </section>
      <section id='skill'>
       <Skill />
      </section>
      <section>
        <Projets />
      </section>
    </div>
  )
}

export default App
