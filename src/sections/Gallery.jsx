import React from 'react'
import ScrollImage from '../components/ScrollImage'

const Gallery = () => {
  return (
    <div className='bg-black md:py-20 py-10'>
      <ScrollImage />
      <div className='scr-txt md:pt-20 pt-0 md:px-20 px-5 md:flex text-white'>
        <div className='md:w-1/2 w-full  md:pb-0 pb-10'>
          <h2 className='text-left text-white md:text-6xl text-3xl text-lowercase'>
            Move Your Message,
            <span className='text-white/50'> Magnify Your Reach</span>
          </h2>
        </div>
        <div className='md:w-1/2 w-full md:px-10'>
          <p className='py-2 text-3xl pb-6 text-white/60'>
            Mobility is the <span className='text-white'>new visibility.</span>  Our Van Campaigns are designed to
            take your brand message further — weaving through daily life,
            <span className='text-white'>catching eyes</span>, and <span className='text-white'>sparking curiosity </span>on the go. Prism Adverto turns
            movement into marketing that travels farther and
            stays unforgettable. 
           
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
