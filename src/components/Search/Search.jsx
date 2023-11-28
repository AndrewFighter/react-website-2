import React from 'react';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';

export const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto mt-20 gap-y-20 lg:gap-4 p-4 items-center  grid lg:grid-cols-3'>
            <div className='grid lg:col-span-2 mt-[-80px]'>
                <div>
                    <h1 className='font-semibold uppercase pb-5 text-center lg:text-left'>luxury included vacations for two people</h1>
                    <p className='max-w-[750px] mx-auto text-center lg:text-left lg:mx-0' >At Caribbean's resort you can choose exactly what's right for your trip! Budget airlines or first class? Difficult route or direct flight? We have made sure that you have a huge selection of air tickets, hotels and train tickets. Change search filters or sort results by criteria that are important to you. Track your flight status on our website or app. Pay for your orders in a way convenient for you using credit or debit cards of various payment systems.</p>
                </div>
                <div className='flex flex-col w-50% mx-auto lg:flex-row gap-6  pt-10'>

                    <div className='flex flex-col lg:flex-row items-center gap-3  text-center flex-1'>
                        <button className='flex justify-center items-center h-full w-[15%] lg:w-[28%] text-2xl mr-3'><RiCustomerService2Fill /></button>
                        <div>
                            <h3 className='uppercase'>leading service</h3>
                            <p className='uppercase text-lg pt-2 '>all inclusive company for 20 years in-a-row</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-3 text-center flex-1'>
                        <button className='flex justify-center items-center h-full  w-[15%] lg:w-[28%] text-2xl mr-3'><MdOutlineTravelExplore /></button>
                        <div>
                            <h3 className='uppercase'>leading service</h3>
                            <p className='uppercase text-lg pt-2'>Delivering All-Inclusive Perfection for Two Decades</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[50%] lg:w-full mx-auto'>
                <div className='p-3 flex flex-col items-center border rounded-md'>
                    <h2 className='font-medium'>GET AN ADDITIONAL 10% OFF</h2>
                    <p className='py-4 text-lg font-medium'>12 HOURS LEFT</p>
                    <button className='w-full text-md font-'>BOOK NOW AND SAVE</button>
                </div>
                <div className='flex flex-col gap-3 my-5'>
                    <label className='font-semibold pl-3'>Destination</label>
                    <select className='p-5 cursor-pointer font-medium rounded-md'>
                        <option>Grande Antigua</option>
                        <option>Maldives</option>
                        <option>Key West</option>
                        <option>Cozumel</option>
                    </select>
                </div>
                <div className='my-4 flex flex-col'>
                    <label className='font-semibold pl-3'>Check-In</label>
                    <input type='date' className='p-5 cursor-pointer font-medium rounded-md outline-none'/>
                </div>
                <div className='my-4 flex flex-col'>
                    <label className='font-semibold pl-3'>Check-Out</label>
                    <input className='p-5 cursor-pointer font-medium rounded-md outline-none' type='date'/>
                </div>
                <div><button className='w-full'>Rates & Availabilities</button></div>
            </div>
        </div>
    )
}
