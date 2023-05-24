import React from 'react'
import homeImage from '../assets/home_image.jpg'
import { CiDatabase, CiMobile4 } from 'react-icons/ci'
import { SiVirtualbox } from 'react-icons/si'
import { GiComputerFan } from 'react-icons/gi'
import { BiBrain } from 'react-icons/bi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>

      {/* Grid view container */}
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

        {/* Col 1 */}
        <div className='flex flex-col justify-center md:items-start w-full px-4 py-8'>
            <p>Unique Cloud Management & Production</p>
            <h1 className='font-bold text-4xl py-3'>Cloud Management</h1>
            <p>For quality services...</p>
            <div className='flex content-start'>
              <button className='mt-3 rounded p-1 border-2 border-[#5D3FD3] m-1 bg-[#5D3FD3] text-white hover:scale-110 transition duration-300 active:scale-90'>Let's Begin!</button> 
            </div>
        </div>

        {/* Col 2 */}
        <div>
          <img src={homeImage} alt="home_image" className='scale-75'/>
        </div>
        {/* Services container */}
        <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-3 mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-400 rounded-xl text-center shadow-xl items-center'>
          <p className='underline w-20 cursor-default'>Services</p>
          <ul className='whitespace-nowrap flex justify-between pt-2'>
            <li className='w-fit inline-flex cursor-default'><GiComputerFan className='h-6 fill-[#5D3FD3]'/>Compute</li>
            <li className='w-fit inline-flex cursor-default'><CiMobile4 className='h-6 fill-[#5D3FD3]'/>Web & Mobile Apps</li>
            <li className='w-fit inline-flex cursor-default'><SiVirtualbox className='h-6 fill-[#5D3FD3]'/>Virtual Machine</li>
            <li className='w-fit inline-flex cursor-default'><CiDatabase className='h-6 fill-[#5D3FD3]'/>SQL Database</li>
            <li className='w-fit inline-flex cursor-default'><BiBrain className='h-6 fill-[#5D3FD3]'/>Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
