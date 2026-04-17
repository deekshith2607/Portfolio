import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Skill from './components/Skill'
import Projets from './components/Projets'
import Contact from './components/Conact'
import Footer from './components/Footer'

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

      <section id='project'>
        <Projets />
      </section>

      <section id='contact'>
        <Contact />
      </section>
      
      <Footer />
    </div>
    
  )
}

export default App
