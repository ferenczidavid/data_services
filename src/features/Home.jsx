import React from 'react'
import homeImage from '../assets/home_image.jpg'
import { CiDatabase, CiMobile4 } from 'react-icons/ci'
import { SiVirtualbox } from 'react-icons/si'
import { GiComputerFan } from 'react-icons/gi'
import { BiBrain } from 'react-icons/bi'

const services = [
  {
    icon: <GiComputerFan className='h-6 fill-[#5D3FD3]'/>,
    label: "Compute"
  }  ,
  {
    icon: <CiMobile4 className='h-6 fill-[#5D3FD3]'/>, 
    label: "Web & Mobile Apps"
  }  ,
  {
    icon: <SiVirtualbox className='h-6 fill-[#5D3FD3]'/>,
    label: "Virtual Machine"
  }  ,
  {
    icon: <CiDatabase className='h-6 fill-[#5D3FD3]'/>,
    label: "SQL Database"
  }  ,
  {
    icon: <BiBrain className='h-6 fill-[#5D3FD3]'/>,
    label: "Machine Learning"
  }  ,
]

const Home = () => {

  return (
    <div name='home' className='w-full h-full bg-zinc-200 flex flex-col justify-between'>

      {/* Grid view container */}
      <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

        {/* Col 1-1 */}
        <div className='flex flex-col justify-center md:items-start w-full px-4 py-8'>
            <p>Unique Cloud Management & Production</p>
            <h1 className='font-bold text-4xl py-3'>Cloud Management</h1>
            <p>For quality services...</p>
            <div className='flex content-start'>
              <button className='mt-3 rounded px-2 py-1 border-2 border-[#5D3FD3] m-1 bg-[#5D3FD3] text-white hover:scale-110 transition duration-300 active:scale-90'>Let's Begin!</button> 
            </div>
        </div>

        {/* Col 2-1 */}
        <div>
          <img src={homeImage} alt="home_image" className='scale-75'/>
        </div>

        {/* Col bottom Services container */}
        <div className='mx-6 -translate bottom-2 flex flex-col py-8 bg-zinc-200 border border-slate-400 rounded-xl text-center shadow-xl items-center md:col-span-2'>
          <p className='underline cursor-default'>Services</p>
          <ul className='w-full whitespace-nowrap flex justify-center md:justify-between pt-2 flex-wrap gap-2'>
            {services.map((item, i) => (<li key={`service_item_${i}`} className='basis-[100px] justify-center gap-2 inline-flex  cursor-default'>{item.icon}{item.label}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
