import React from 'react'
import { assets } from '../assets/assets'

const Features = () => {
  return (
    <div className='w-screen flex flex-col justify-center items-center px-20 py-12'>
      <div><h2 className='text-center text-[#00b8d9] text-[70px] font-bold'>Features</h2></div>
      <div className='flex justify-between items-center gap-12'>
        {/* feature card */}
        <div className='w-1/3 px-12 bg-white rounded-3xl shadow-lg flex-col justify-start items-start gap-8 pt-12 pb-40 '>
          <img class="w-12 h-12 mb-8" src={assets.mapIcon}/>
          <div class="text-black text-xl font-medium ">Interactive Dashboard:<br /> View and analyze oil spills visually.</div>
        </div>
        {/* feature card */}
        <div className='w-1/3 px-12 bg-white rounded-3xl shadow-lg flex-col justify-start items-start gap-8 pt-12 pb-40'>
          <img class="w-12 h-12 mb-8" src={assets.alertIcon}/>
          <div class="text-black text-xl font-medium ">Real-Time Alerts:<br /> Notify response teams instantly.</div>
        </div>
        {/* feature card */}
        <div className='w-1/3 px-12 bg-white rounded-3xl shadow-lg flex-col justify-start items-start gap-8 pt-12 pb-40'>
          <img class="w-12 h-12 mb-8" src={assets.historyIcon}/>
          <div class="text-black text-xl font-medium ">Historical Data:<br /> Learn from past oil spills</div>
        </div>
      </div>
    </div>
  )
}

export default Features