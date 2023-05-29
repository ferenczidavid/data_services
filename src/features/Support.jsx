import React from 'react'
import bgImage from '../assets/support.jpg'
import Button from '../components/common/Button'

const Support = () => {
  return (
    <div name='support' className='w-full h-full pt-[5rem]  bg-zinc-200'>
        {/* Image "header" */}
      <div className='w-full h-[44rem] md:h-[48rem] bg-gray-900/90 absolute'>
        <img src={bgImage} alt="" className='w-full h-full object-cover mix-blend-overlay'/>
      </div>
      {/* Container */}
      {/* Relative so the text will be over the image */}
      <div className=' mx-auto text-white relative cursor-default'>
        {/* Texts */}
        <div className='text-center py-4'>
            <h2>Customer Support</h2>
            <h1 className='font-bold'>Finding the right service</h1>    
        </div>
        <div className='rounded bg-zinc-500 p-4 w-2/3 my-28 ml-4'>
            <h1 className='text-2xl'>Explore Cloud Management with demos and a live Q&A</h1>
            <p className='py-4'>Get started with confidence by getting brief information on fundamentals by our live Customer Service. See how to get free services, architect solutions, manage resources, deploy apps and databases, and save money. Get answers in real time from Cloud Management experts.</p>
            <Button>Register</Button>
        </div>
        {/* Support cards */}
      </div>
    </div>
  )
}

export default Support
