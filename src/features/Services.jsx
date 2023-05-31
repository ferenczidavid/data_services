import React from 'react'
import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { DiLinux } from 'react-icons/di'
import { DiDatabase } from 'react-icons/di'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import { GiPlanetCore } from 'react-icons/gi'
import { TbWorldLongitude } from 'react-icons/tb'
import { AiFillThunderbolt } from 'react-icons/ai'

const services = [
    {
        id:1,
        time:'12 MONTHS',
        icon: <DiLinux className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'Virtual Machines - Linux',
        desc: '750 hours B1s burstable virtual machines'
    },
    {
        id:2,
        time:'12 MONTHS',
        icon: <DiDatabase className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'SQL Database',
        desc: '250 GB S0 instance with 10 database transaction units'
    },
    {
        id:3,
        time:'12 MONTHS',
        icon: <BsFillGrid1X2Fill className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'Blob Storage',
        desc: '5 GB locally redundant storage (LRS) hot block with 20000 read and 10000 write operations'
    },
    {
        id:4,
        time:'ALWAYS',
        icon: <GiPlanetCore className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'Cosmos DB',
        desc: '1000 request units per-second provisioned throughput with 25 GB storage'
    },
    {
        id:5,
        time:'ALWAYS',
        icon: <TbWorldLongitude className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'App Service',
        desc: '10 web, mobile, or API apps with 1 GB storage 1 hour per day'
    },
    {
        id:6,
        time:'ALWAYS',
        icon: <AiFillThunderbolt className='h-7 w-7 fill-[#5D3FD3]'/>,
        service:'Functions',
        desc: '1 million requests'
    },
]

const Services = () => {
  return (
    <div name='services' className='w-full h-fit'>
        {/* Container */}
        <div className='max-w-[1540px] h-full mx-4 grid grid-cols-2'>
            {/* Text */}
            <div>
                <h1 className='font-bold text-2xl'>After your credit, keep getting free services</h1>
                <p className='py-4'>Move to pay as you go for free monthly amounts of popular services for 12 months and 55+ other services always.</p>
                <Button type='secondary'>See all free services</Button>
            </div>
            
            {/* Grid */}
            {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'> */}
            <div className='w-full h-full flex flex-wrap gap-4 justify-center'>
                {
                    services.map(({id,time,icon,service,desc}) => (
                        <div 
                            key={id}
                            className='w-40 h-64 md:h-60 lg:h-80 flex flex-col border border-slate-400 rounded-md shadow-xl bg-zinc-100 p-4'
                        >
                            <p className='pb-3'>{time}</p>
                            <icon>{icon}</icon>
                            <h3 className='font-bold py-3 md:py-0 lg:py-3'>{service}</h3>
                            <p className='text-sm lg:text-base'>{desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Services
