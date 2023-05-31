import React from 'react'
import bgImage from '../assets/support.jpg'
import Button from '../components/common/Button'

const Support = () => {
  return (
    <div name='support' className='w-full h-full relative text-white border'>
      {/* Image "header" */}
      <div className='w-full h-full bg-gray-900/90'>
        <img src={bgImage} alt="" className='w-full h-full object-cover mix-blend-overlay'/>
      </div>

      {/* Texts */}
      {/* <div className="w-full h-full relative"></div> */}
      <div className='text-center py-4 absolute top-0 left-1/2 -translate-x-1/2'>
          <h2 className='text-sm md:text-2xl'>Customer Support</h2>
          <h1 className='text-sm md:text-xl font-bold'>Finding the right service</h1>    
      </div>
      
      {/* Container */}
      <div className='rounded bg-zinc-500 p-4 w-2/3 md:w-1/3 top-1/3 left-[2rem] absolute'>
          <h1>Explore Cloud Management with demos and a live Q&A</h1>
          <p className='text-sm'>Get started with confidence by getting brief information on fundamentals by our live Customer Service. See how to get free services, architect solutions, manage resources, deploy apps and databases, and save money. Get answers in real time from Cloud Management experts.<Button className='ml-2'>Register</Button></p>
          
      </div>
    </div>
  )
}

export default Support
