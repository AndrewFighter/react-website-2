import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    

    const handler = () => {
        setNav(prev => !prev);
        
    }
    return (
        <nav className='absolute z-50 text-white flex justify-between items-center h-[6rem] w-full  md:p-4 p-8 '>
            <h1 className='cursor-pointer'>BEACHES.</h1>
            <ul className='hidden md:flex gap-8 font-medium'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex gap-4'>
                <BsPerson className='cursor-pointer' size={25} />
                <BsSearch className='cursor-pointer' size={25}  />
            </div>
            <div className='z-30 md:hidden cursor-pointer' onClick={handler}>
                {!nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            <div className={`${nav ? 'absolute z-10 top-0 left-[-100%] md:hidden' : 'md:hidden absolute flex flex-col z-10  top-0 left-0 bg-gray-200 w-full px-5 py-8'} `}  >
                <h1 className='cursor-pointer '>BEACHES.</h1>
                <ul className='flex flex-col gap-4 ml-3 my-7 text-black'>
                    <li className='flex h-10 items-center border-b-[1.6px] border-black'>Home</li>
                    <li className='flex h-10 items-center border-b-[1.6px] border-black'>Destinations</li>
                    <li className='flex h-10 items-center border-b-[1.6px] border-black'>Travel</li>
                    <li className='flex h-10 items-center border-b-[1.6px] border-black'>View</li>
                    <li className='flex h-10 items-center border-b-[1.6px] border-black'>Book</li>
                </ul>
                <div className='my-8 flex  flex-col gap-6'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='flex my-5  justify-between cursor-pointer'>
                    <FaFacebook size={25} className='icon' />
                    <FaInstagram size={25} className='icon' />
                    <FaLinkedin size={25} className='icon' />
                    <FaTwitter size={25} className='icon' />
                    <FaYoutube size={25} className='icon' />
                </div>
            </div>

        </nav>
    )
}

export default Navbar