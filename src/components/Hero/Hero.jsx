import React from 'react';
import './Hero';
import video from './../../Content/beachVid.mp4';
import { AiOutlineSearch } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='relative max-h-[700px] '>
        <video className='max-h-[700px] w-full object-cover' src={video} autoPlay loop muted/>
        <div className='absolute z-20 top-0 left-0 w-full h-full bg-gray-900/30'></div>
        <div className='absolute z-40 top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white'>
            <h1>First Class Travel</h1>
            <h2 className='my-5 text-3xl'>Top 1% Locations Worldwide</h2>
            <form className='flex justify-between w-[500px] bg-white p-1 rounded-md'>
                <div><input type="text" className='h-full pl-3 font-[Poppins]  focus:outline-none bg-transparent text-black' placeholder='Search Destinations'/></div>
                <div><button className='p-3 cursor-pointer'><AiOutlineSearch size={20}/></button></div>
            </form>
        </div>
    </div>
  )
}

export default Hero