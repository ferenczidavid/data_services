import React from 'react'
import PricingCard from '../components/common/PricingCard'
import Button from '../components/common/Button'

const pricingCards = [
    {
        id:1,
        text: 'Start free. Get $200 credit to use in 30 days. While you have your credit, get free amounts of popular services and 55+ other services.'
    },
    {
        id:2,
        text: 'After your credit, move to pay as you go to keep getting popular services. Only pay if you use more than the free monthly amounts.'
    },
    {
        id:3,
        text: 'After 12 months, you will continue getting 55+ services free always—and still only pay for what you use beyond the free monthly amounts.'
    },
]

const Pricing = () => {
  return (
    <div name='pricing' className='w-full h-full'>
        {/* Container */}
        <div className='max-w-[1240px] mx-auto grid grid-cols-1 gap-y-28'>
            {/* Text */}
            <div className='flex justify-center'>
                <h2 className='font-bold p-4'>Ready? Here is a review of how it works</h2>
            </div>
            {/* Pricing cards */}
            <div className='flex'>
                {pricingCards.map(({id,text}) => (
                    <PricingCard key={id}>
                        <h1 className='font-bold text-2xl md:text-4xl text-[#5D3FD3]'>{id}</h1>
                        <p className='text-sm md:text-base'>{text}</p>
                    </PricingCard>
                ))}
            </div>
            {/* Button */}
            <div className='flex justify-center'>
                <Button>
                    Start
                </Button>
            </div>
        </div>
      
    </div>
  )
}

export default Pricing
