import React from 'react'
import bg_image from '../assets/Computer_engnng_background.png'
import mobile_bg from '../assets/mobile_bg.png'
import filter from '../assets/filter.png'

const ComputerEngineeringBanner = () => {
  return (
    <div className='w-full  relative computer-engineering-container'>
        {/* backgroud image */}
        <img src={bg_image} alt='computerEngng_bg' className='w-full banner-bg-image desktop_bg'/>
        <img src={mobile_bg} alt='computerEngng_mobile_bg' className='w-full banner-bg-image hidden mobile_bg'/>
        {/* filter image */}
        <img src={filter} alt='filter' className='w-full  absolute top-0 banner-bg-image'/>
        {/* Group heading and number of students joined */}
        <div className='absolute bottom-[5.1rem] left-[210px] group-heading'>
            <p className='  text-[#ffffff] text-[36px] font-bold'>Computer Engineering</p>
            <p className='text-[#ffffff]'>142,765 Computer Engineers follow this</p>
        </div>
        
    </div>
  )
}

export default ComputerEngineeringBanner