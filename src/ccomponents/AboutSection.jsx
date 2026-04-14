import React from 'react'
import Aboutrleft from './Aboutrleft'
import AboutRight from './AboutRight'

const AboutSection = () => {
  return (
    <div className='h-full p-4 md:p-10 w-full flex flex-col md:flex-row items-center justify-center ' style={{backgroundColor:"var(--bg)"}}>
      <Aboutrleft />
      <AboutRight />
    </div>
  )
}

export default AboutSection
