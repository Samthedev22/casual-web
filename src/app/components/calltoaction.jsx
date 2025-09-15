import React from 'react'
import Link from 'next/link';
import { MdOutlineCalendarMonth, MdPhone } from 'react-icons/md';

const CallToAct = () => {
  return (
    
    <div className='w-full md:hidden items-center justify-center fixed bottom-0 
    p-4 px-3left-0 z-25 bg-white flex gap-5 text-sm'>
        <div className='w-full bg-[#3B4CA3] text-white'>
            <Link href="/appointment"
            className='flex items-center text-center  gap-1 justify-center p-3 pl-7'>
            <MdOutlineCalendarMonth className='flex'/>
            <span>Book Now</span>
            </Link>
        </div>

        <div className='w-full flex text-white bg-[#3B4CA3]'> 
            <Link href="tel:+16132600333"
            className='flex items-center text-center  gap-1 justify-center p-3 pl-7'>
            < MdPhone />
            <span>Contact Us</span>
            </Link>
        </div>
    

    </div>
    
  );
};

export default CallToAct;