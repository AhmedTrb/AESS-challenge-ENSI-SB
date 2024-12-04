import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const SolutionPage = () => {
  return (
    <div className='w-full h-full flex'>
      {/* Sidebar */}
      <div className='w-1/5 px-6 py-6 h-screen flex flex-col gap-3 align-center '>
        <div className='flex  justify-between items-center'>
          <img src={assets.Logo} className='w-14 h-14' alt="logo" />
          <h2 className='text-xl text-black font-bold text-center'>MedGuard</h2>
        </div>
        <hr className='bg-[#DBDBDB] h-[1px]'/>
        <div>
          <ul className='flex flex-col gap-2'>
            <Link to="/"> <div className='text-[#787486] text-lg font-medium hover:bg-[#00B9DA14] px-2 py-1 hover:text-[#3A3946] hover:rounded-lg cursor-pointer'><p>Home</p></div></Link>
            <div className='text-[#787486] text-lg font-medium hover:bg-[#00B9DA14] px-2 py-1 hover:text-[#3A3946] hover:rounded-lg cursor-pointer'><p>History</p></div>
            <div className='text-[#787486] text-lg font-medium hover:bg-[#00B9DA14] px-2 py-1 hover:text-[#3A3946] hover:rounded-lg cursor-pointer'><p>Prevention Team</p></div>
          </ul>
        </div>
      </div>
      {/* Main */}
      <div className='w-full h-full bg-[#f5f5f5] flex flex-col gap-10 justify-start items-start px-12 py-8'>
        <h2 className='text-3xl text-black font-bold'>Recenty Detected Spills</h2>

        {/* Spill Card */}
        <div className='w-full px-8 py-6 flex justify-between items-start gap-3 bg-white rounded-xl shadow-lg'>
          {/* Spill infos */}
          <div className='w-1/2 h-full flex flex-col gap-4'>
            <div className='flex flex-col gap-0.1'>
              <div className='flex justify-start items-center gap-2'><h2 className='text-2xl text-black font-bold'>Oil spill location</h2><span><img src={assets.Alert} alt="" /></span></div>
              <p className='text-md text-[#0000004b]'>Detected on 2024-08-26 17:12:47</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl text-black font-bold'>Details</h2>
              <div className='flex flex-col text-[#3A3946] font-medium'>
                <p className='text-md text-[#3A3946] font-normal'>Length : 6 Km</p>
                <p>Area : 5Km<sup>2</sup></p>
                <p>Exact location : 35.749, 11.070</p>    
                <p>Confidence level : 92%</p>
              </div>
              <h2 className='text-xl text-black font-bold'>Response Status :</h2>
              <div className='flex flex-col gap-1'>
                <p>Nearest Response Team: 10km away</p>
                <p>Response Team Contact: +216 71 123 456</p>
                <div className='flex items-center gap-2'>
                  <p>Status :</p>
                  <img src={assets.confirmed} alt="" />
                </div>
              </div>
            </div>
          
          </div>
          {/* Suspected oil spill Image */}
          <div className='w-1/2 flex  flex-col gap-3 justify-center items-center'>
            <h3 className='text-2xl text-black font-bold'>Suspected oil Spill</h3>
            <img src={assets.spill}  className='w-50 h-50 rounded-md' alt="" />
          </div>
        </div>

        {/* Spill Card */}
        <div className='w-full px-8 py-6 flex justify-between items-center gap-3 bg-white rounded-xl shadow-lg'>
          {/* Spill infos */}
          <div className='w-1/2 h-full flex flex-col gap-4'>
            <div className='flex flex-col gap-0.1'>
              <div className='flex justify-start items-center gap-2'><h2 className='text-2xl text-black font-bold'>Oil spill location</h2><span><img src={assets.Alert} alt="" /></span></div>
              <p className='text-md text-[#0000004b]'>Detected on 25/09/2020</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl text-black font-bold'>Details</h2>
              <div className='flex flex-col text-[#3A3946] font-medium'>
                <p className='text-md text-[#3A3946] font-normal'>Size : 25Km<sup>2</sup></p>
                <p>Volume : 1000m<sup>3</sup></p>
                <p>Exact location : 35.6789° N, 10.1234° E</p>    
                <p>Confidence level : 92%</p>
              </div>
              <h2 className='text-xl text-black font-bold'>Response Status :</h2>
              <div className='flex flex-col gap-1'>
                <p>Nearest Response Team: 10km away</p>
                <p>Response Team Contact: +216 71 123 456</p>
                <div className='flex items-center gap-2'>
                  <p>Status :</p>
                  <img src={assets.confirmed} alt="" />
                </div>
              </div>
            </div>
          
          </div>
          {/* Suspected oil spill Image */}
          <div className='w-1/2 flex  flex-col gap-3 justify-center items-center'>
            <h3 className='text-2xl text-black font-bold'>Suspected oil Spill</h3>
            <img src={assets.spill}  className='w-50 h-50 rounded-md' alt="" />
          </div>
        </div>

        {/* Spill Card */}
        <div className='w-full px-8 py-6 flex justify-between items-center gap-3 bg-white rounded-xl shadow-lg'>
          {/* Spill infos */}
          <div className='w-1/2 h-full flex flex-col gap-4'>
            <div className='flex flex-col gap-0.1'>
              <div className='flex justify-start items-center gap-2'><h2 className='text-2xl text-black font-bold'>Oil spill location</h2><span><img src={assets.Alert} alt="" /></span></div>
              <p className='text-md text-[#0000004b]'>Detected on 25/09/2020</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h2 className='text-xl text-black font-bold'>Details</h2>
              <div className='flex flex-col text-[#3A3946] font-medium'>
                <p className='text-md text-[#3A3946] font-normal'>Size : 25Km<sup>2</sup></p>
                <p>Volume : 1000m<sup>3</sup></p>
                <p>Exact location : 35.6789° N, 10.1234° E</p>    
                <p>Confidence level : 92%</p>
              </div>
              <h2 className='text-xl text-black font-bold'>Response Status :</h2>
              <div className='flex flex-col gap-1'>
                <p>Nearest Response Team: 10km away</p>
                <p>Response Team Contact: +216 71 123 456</p>
                <div className='flex items-center gap-2'>
                  <p>Status :</p>
                  <img src={assets.confirmed} alt="" />
                </div>
              </div>
            </div>
          
          </div>
          {/* Suspected oil spill Image */}
          <div className='w-1/2 flex  flex-col gap-3 justify-center items-center'>
            <h3 className='text-2xl text-black font-bold'>Suspected oil Spill</h3>
            <img src={assets.spill}  className='w-50 h-50 rounded-md' alt="" />
          </div>
        </div>
      </div>
      <hr className='bg-[#DBDBDB] h-[1px]'/>
    </div>
  )
}

export default SolutionPage