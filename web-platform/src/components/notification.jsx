import React from 'react'

const Notification = () => {
  return (
    <div className="w-screen h-1/4 p-20 flex justify-between items-start bg-[#00b8d9]">
      <div class="text-white text-7xl font-bold">Receive notifications<br/> when spills are<br/> detected</div>
      <div className='flex flex-col items-start justify-between h-full gap-10'>
        <div>
          <label className='text-white font-medium text-2xl'>Email</label>
          <input type="email" name="email" placeholder='email' className='border-gray-100 rounded-lg py-3 w-full pl-4'/>
        </div>
        <div className='bg-[#3a3946] px-6 py-3 text-white text-lg rounded-lg cursor-pointer'>Get Notifications</div>
      </div>
    </div>
  )
}

export default Notification