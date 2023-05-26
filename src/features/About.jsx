import React from 'react'
import Card from '../components/common/Card'


const About = () => {
  return (
    <div name='about' className='w-full h-full pt-[10rem] bg-zinc-200'>
        {/* Container */}
        <div className='max-w-[1240px] mx-auto'>
            {/* Text box */}
            <div className='text-center'>
                <h1 className='capitalize text-4xl font-bold'>trusted by developers around the world.</h1>
                <p className='text-xl text-gray-500 mt-3'>Thousands of satisifed clients. Thousands of delivered requests.</p>
            </div>
            {/* Cards */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-1 px-2 mt-16'>
                {/* Card 1 */}
                <Card >
                    <p ><span className='text-[#5D3FD3] font-bold'>12+</span> months free popular services</p>
                </Card>
                {/* Card 2 */}
                <Card>
                    <p><span className='text-[#5D3FD3] font-bold'>55+</span> other services free</p>
                </Card>
                {/* Card 3 */}
                <Card>
                    <p><span className='text-[#5D3FD3] font-bold'>24/7</span> delivery</p>
                </Card>
                {/* Card 4 */}
                <Card>
                    <p><span className='text-[#5D3FD3] font-bold'>100%</span> completion</p>
                </Card>
            </div>
        </div>
      
    </div>
  )
}

export default About
