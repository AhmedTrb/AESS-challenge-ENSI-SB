import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <div className='px-20 flex flex-col gap-14 justify-center items-center h-1/2 w-screen py-14'>
      <div className="text-center text-black text-[60px] font-bold">Our Solution</div>
      <div className='flex justify-between items-center gap-6'>
        <div class="w-1/2 text-black text-[28px] font-medium leading-[48px]">Our solution leverages advanced satellite imaging technology and artificial intelligence to address the critical environmental challenge of oil spills. Using Synthetic Aperture Radar (SAR) images, our system detects and monitors oil spills in real time, calculates the spill size and surface area.<br/><br/>By integrating this solution into a user-friendly web platform, we empower decision-makers with actionable insights to mitigate environmental and economic impacts promptly.</div>
        <img src={assets.solutionImage} className='w-1/2 rounded-md' alt="" />
      </div>
      <Link to="/login">
      <div class="text-white text-[25px] font-semibold bg-[#00b8d9] rounded-md cursor-pointer px-6 py-4">View Solution</div>
      </Link>
    </div>
  )
}

export default Solution