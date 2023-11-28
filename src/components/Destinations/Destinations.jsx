import React from 'react';
import './Destinations.css';
import BoraBora from './../../Content/borabora.jpg';
import BoraBora2 from './../../Content/borabora2.jpg';
import keywest from './../../Content/keywest.jpg';
import maldives from './../../Content/maldives.jpg';
import maldives2 from './../../Content/maldives2.jpg';
import maldives3 from './../../Content/maldives3.jpg';

const Destinations = () => {
    return (
        <div className='max-w-[1240px] mx-auto sm:h-[1500px] md:h-[600px] py-16  text-center'>
            <h1 className='py-4'>All Inclusive Resorts</h1>
            <p>On The Caribbean's Best Beaches</p>
            <div className='mt-4 grid grid-cols-4 md:grid-cols-5  gap-x-4 gap-y-4 cursor-pointer p-4'>
                <img src={keywest} className='col-span-4 md:col-span-2 md:row-span-2 object-cover ' alt='Something' />
                <img src={BoraBora} className='col-span-2 md:col-span-1 object-cover' alt='Something' />
                <img src={BoraBora2} className='col-span-2 md:col-span-1 object-cover' alt='Something' />
                <img src={maldives} className='col-span-2 md:col-span-1 object-cover' alt='Something' />
                <img src={maldives2} className='col-span-2 md:col-span-1 object-cover h-full' alt='Something' />
                <img src={maldives3} className='col-span-2 md:col-span-1 object-cover h-full' alt='Something' />
                <img src={BoraBora2} className='col-span-2 md:col-span-1 object-cover h-full' alt='Something' />
            </div>
        </div>
    )
}

export default Destinations