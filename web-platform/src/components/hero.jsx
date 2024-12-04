import React from 'react'
import { assets } from '../assets/assets'

const HeroSection = () => {
  return (
    <div className='bg-hero-bg h-screen w-full bg-cover bg-no-repeat flex flex-col justify-start gap-36'>
      {/* topbar */}
      <div className='flex items-center gap-16 px-20 py-8'>
        <div>
          <img src={assets.Logo} className='h-20 w-20 scale-125' alt="logo" />  
        </div>
        {/* navbar */}
        <div className='bg-[#ffffffa5] rounded-[14px]'> 
          <ul className='list-none flex gap-4 justify-between items-center'>
            <li className='cursor-pointer text-black text-xl font-normal px-14 py-4 hover:bg-[#3a3945] hover:text-white hover:rounded-[14px]'><a href="#">Home</a></li>
            <li className='cursor-pointer text-black text-xl font-normal px-14 py-4 hover:bg-[#3a3945] hover:text-white hover:rounded-[14px]'><a href="#">Our Solution</a></li>
            <li className='cursor-pointer text-black text-xl font-normal px-14 py-4 hover:bg-[#3a3945] hover:text-white hover:rounded-[14px]'><a href="#">Features</a></li>
            <li className='cursor-pointer text-black text-xl font-normal px-14 py-4 hover:bg-[#3a3945] hover:text-white hover:rounded-[14px]'><a href="#">Contact US</a></li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-8 text-center'>
      <div className="text-center"><span className="text-white text-[60px] font-bold  leading-[80px]">Oil Spill Detection Monitoring : <br/></span><span className="text-white text-[100px] font-bold leading-[120px]">Protecting Our Oceans</span></div>
      </div>
    </div>
  )
}

export default HeroSection