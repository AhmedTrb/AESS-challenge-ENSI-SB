import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <div className='px-20 py-10 flex justify-between items-start'>
      {/* Contact us */}
      <div className='flex flex-col justify-between gap-6 items-start w-1/3'>
      <div class="text-[#3a3946] text-[40px] font-bold ">Contact Us</div>
        <div className='flex flex-col gap-1 items-start justify-between'>
          <div className='flex flex-col items-start justify-between gap-2'>
            <label className='text-black font-medium text-xl'>Full Name</label>
            <input type="text" placeholder='full name' className='border border-black/30 rounded-lg py-3 w-full pl-4'/>
          </div>
          <div className='flex flex-col items-start justify-between gap-2'>
            <label className='text-black font-medium text-xl'>Email</label>
            <input type="email" name="email" placeholder='email' className='border border-black/30 rounded-lg py-3 w-full pl-4'/>
          </div>
          <div className='flex flex-col items-start justify-between gap-2'>
            <label className='text-black font-medium text-xl'>Message</label>
            <input type="text" placeholder='Message' className='border border-black/30 rounded-lg py-3 w-full pl-4 pb-10 pt-4 h-8'/>
          </div>
        </div>
        <div class="text-white text-[25px] font-medium bg-[#00b8d9] rounded-md cursor-pointer px-6 py-2">Submit</div>
        </div>
      {/* Site Map */}
      <div className='flex flex-col justify-between gap-6 items-start w-1/3'>
        <div class="text-[#3a3946] text-[40px] font-bold ">Contact Us</div>
        <div>
          <ul>
            <li className='text-[#3a3946] text-xl font-medium'>Home</li>
            <li className='text-[#3a3946] text-xl font-medium'>Solution</li>
            <li className='text-[#3a3946] text-xl font-medium'>Our Goals</li>
            <li className='text-[#3a3946] text-xl font-medium'>Features</li>
            <li className='text-[#3a3946] text-xl font-medium'>Notifications</li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className='flex flex-col justify-between gap-6 items-start w-1/3'>
        <div>
          <img src={assets.Logo} alt="" className='h-15 w-15' />
        </div>
        <div className='flex items-center justify-start gap-4'>
          <img src={assets.phoneIcon} alt="" className='h-10 w-10'/>
          <div className='text-[#3a3946] text-xl font-medium'>+216 12 345 678</div>
        </div>
        <div className='flex items-center justify-start gap-4'>
          <img src={assets.mailIcon}  className='h-10 w-10' alt="" />
          <div className='text-[#3a3946] text-xl font-medium'>contact@medguard.com</div>
        </div>
      </div>
    </div>
  )
}

export default Footer