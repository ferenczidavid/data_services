import React from 'react'
import homeImage from '../assets/home_image.jpg'
import { BsApple } from 'react-icons/bs'
import { FaWindows, FaLinux, FaMobile, FaAndroid } from 'react-icons/fa'

const services = [
  {
    icon: <FaWindows className='h-6 w-6 fill-[#5D3FD3]'/>,
    label: "Microsoft Windows"
  }  ,
  {
    icon: <FaLinux className='h-6 w-6 fill-[#5D3FD3]'/>, 
    label: "Linux"
  }  ,
  {
    icon: <BsApple className='h-6 w-6 fill-[#5D3FD3]'/>,
    label: "macOS"
  }  ,
  {
    icon: <FaAndroid className='h-6 w-6 fill-[#5D3FD3]'/>,
    label: "Android"
  }  ,
  {
    icon: <FaMobile className='h-6 w-6 fill-[#5D3FD3]'/>,
    label: "iOS"
  }  ,
]

const Home = () => {

  return (
    <div name='home' className='w-full h-full flex flex-col justify-between snap-center'>

      {/* Grid view container */}
      <div className='w-full grid md:grid-cols-2 max-w-[1240px] m-auto md:gap-y-64 px-6'>

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

        <img src={homeImage} alt="home_image" className='scale-75'/>


        {/* Col bottom Services container */}
        <div className='w-full -translate bottom-2 flex flex-col py-8 bg-zinc-200 border border-slate-400 rounded-xl text-center shadow-xl items-center md:col-span-2'>
          <p className='underline cursor-default'>Platforms</p>
          <ul className='w-full whitespace-nowrap flex justify-center md:justify-between pt-2 flex-wrap gap-2'>
            {services.map((item, i) => (<li key={`service_item_${i}`} className='basis-[100px] justify-center gap-2 inline-flex  cursor-default'>{item.icon}{item.label}</li>))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
