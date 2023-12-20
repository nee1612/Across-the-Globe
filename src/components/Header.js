import React from 'react'
import logo from '../assets/Logo.png'
import search_icon from '../assets/search_icon.png'
import down_arrow from '../assets/down_arrow.png'
import profile_pic from '../assets/Joseph_Gray.png'

const Header = ( {isLoggedIn, setIsLoggedIn} ) => {
  return (
    <div className='h-[72px] flex justify-around items-center header-container'>
        {/* logo of the site */}
        <img src={logo} alt='logo'/>


        {/* search input field container*/}
        <div className='flex gap-3 bg-[#F2F2F2] rounded-[21px] w-[25%] py-[0.5rem] px-[0.85rem] items-center'>
            {/* search input field icon*/}
            <img src={search_icon} alt='search' className='w-[22px] h-[22px]'></img>

            {/* search input field container*/}
            <input type='text' placeholder='Search for your favorite groups in ATG' className='bg-[#F2F2F2] placeholder:text-placeholderText focus:outline-none w-full font-medium  text-[14px]'/>
        </div>


        {/* Create account text */}
        {
          isLoggedIn === true ? 
          <button className='flex gap-2 justify-between items-center transition-all duration-150' onClick={()=> setIsLoggedIn(!isLoggedIn)}>
            <img src={profile_pic} alt='profile' className='w-[36px] h-[36px]'/>
            <p className='font-medium '>Siddharth Goyal</p>
            <img src={down_arrow} alt='down-arrow'/>
          </button> 
          :
          <button className='flex gap-1 justify-between items-center transition-all duration-150' onClick={()=> setIsLoggedIn(!isLoggedIn)}>
            <p className='font-semibold '>Create account. </p>
            <span className=' text-freeAndJoinButtonColor font-bold'>It's free!</span>
            <img src={down_arrow} alt='down-arrow'/>
        </button>
        }
        

    </div>
  )
}

export default Header