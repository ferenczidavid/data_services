import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Twirl as Hamburger } from 'hamburger-react'

const Navbar = () => {
    /* useStates */
    const [isOpen, setIsOpen] = useState(false);

    /* List of links */
    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'about'
        },
        {
            id:3,
            link: 'support'
        },
        {
            id:4,
            link: 'platforms'
        },
        {
            id:5,
            link: 'pricing'
        }
    ]

  return (
    /* Navbar */
    <div className='fixed w-screen h-[5rem] flex justify-between items-center px-4 bg-zinc-200 shadow-lg'>
        {/* logo */}
        <div className='font-bold'>
            <a href="home" >C<span className='text-[#5D3FD3]'>M.</span></a>
        </div>

        {/* links */}
        <ul className='hidden md:flex'>
            {
                links.map(({id,link}) => (
                    <li key={id} className='capitalize hover:scale-110 transition ease-in-out duration-300 hover:border-b-2 border-zinc-400 active:scale-90 first-letter:text-[#5D3FD3]'>
                        <Link 
                            to={link}
                            smooth
                            duration={500}
                        >
                            {link}
                        </Link>
                    </li>
                ))
            }
        </ul>

        {/* Hamburger */}
        <div className='md:hidden z-10'>
            <Hamburger
                toggled={isOpen}
                toggle={setIsOpen}
                size={25}
                direction='right'
                duration={.4}
                distance='sm'
                rounded
                label='Open Menu'
            />
        </div>
        
        {/* Buttons */}
        <div className='hidden md:flex'>
            <button className='rounded p-1 border-2 border-[#5D3FD3] m-1 hover:scale-110 transition duration-300 active:scale-90'>Log In</button>
            <button className='rounded p-1 border-2 border-[#5D3FD3] m-1 bg-[#5D3FD3] text-white hover:scale-110 transition duration-300 active:scale-90'>Register</button>
        </div>

        {/* Hamburger menu open */}
        {isOpen && (
            <ul className='absolute w-full top-[5rem] px-9 flex flex-col justify-center items-center bg-zinc-200 md:hidden'>
                
                {
                    links.map(({id,link}) => (
                        <li key={id} className='first-letter:text-[#5D3FD3] border-b-2 border-zinc-300 w-full capitalize hover:scale-110 transition ease-in-out duration-300 active:scale-90 '>
                            <Link 
                                to={link}
                                smooth
                                duration={500}
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {link}
                            </Link>
                        </li>
                    ))
                }
                <div>
                    <button className='rounded p-1 border-2 border-[#5D3FD3] m-1 hover:scale-110 transition duration-300 active:scale-90'>Log In</button>
                    <button className='rounded p-1 border-2 border-[#5D3FD3] m-1 bg-[#5D3FD3] text-white hover:scale-110 transition duration-300 active:scale-90'>Register</button> 
                </div>    
            </ul>
        )}
    </div>
  )
}

export default Navbar
