import React from 'react'
import {MdCopyright} from 'react-icons/md'

const footerLinks = [
    {
        id:1,
        text:'Diversity and Inclusion',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:2,
        text:'Accessibility',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:3,
        text:'Privacy & Cookies',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:4,
        text:'Data Protection Notice',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:5,
        text:'Trademarks',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:6,
        text:'Terms of Use',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:7,
        text:'Privacy Data Management',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:8,
        text:'Manage Cookies',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:9,
        text:'Contact Us',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
    {
        id:10,
        text:'Feedback',
        ref:'https://www.linkedin.com/in/ferenczi-david/',
        target: '_blank'
    },
]

const Footer = () => {
  return (
    <div className='h-[7rem] w-full bg-zinc-300 flex justify-center items-center flex-wrap p-5'>
      {/* Container */}
      <div>
        {
                footerLinks.map(({id,text,ref,target}) => (
                    <a 
                        href={ref} 
                        target={target} 
                        key={id}
                        className='px-3 hover:underline'
                    >{text}</a>
                ))
            }
            <p className='cursor-default px-3 inline-flex font-bold'><MdCopyright/>Cloud management 2023</p>  
      </div>
    </div>
  )
}

export default Footer
