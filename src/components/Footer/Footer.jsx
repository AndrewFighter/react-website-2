import React from 'react';
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto bg-gray-300 px-4 py-5 pb-10'>
            <div className='md:flex justify-between items-center text-center'>
                <h1 className=''>Beaches.</h1>
                <div className='flex my-5 gap-4 justify-between cursor-pointer'>
                    <FaFacebook size={25} className='icon' />
                    <FaInstagram size={25} className='icon' />
                    <FaLinkedin size={25} className='icon' />
                    <FaTwitter size={25} className='icon' />
                    <FaYoutube size={25} className='icon' />
                </div>
            </div>
            <div className='flex justify-between gap:4 px-6'>
                <ul className='flex flex-col lg:flex-row gap-3'>
                    <li>About</li>
                    <li>PartnerShips</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='flex flex-col lg:flex-row gap-3'>
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            </div>
        </div>
    )
}

export default Footer