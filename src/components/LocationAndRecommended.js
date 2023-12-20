import React from 'react'
import location from '../assets/location.png'
import cross from '../assets/cross.png'
import info from '../assets/info.png'
import like from '../assets/like.png'
import leisure from '../assets/leisure.png'
import mba from '../assets/mba.png'
import activism from '../assets/activism.png'
import philosophy from '../assets/philosophy.png'
import {useState} from 'react'

const LocationAndRecommended = ({isLoggedIn}) => {
    const [isFollowingLeisure, setIsFollowingLeisure] = useState(false);
    const [isFollowingActivism, setIsFollowingActivism] = useState(false);
    const [isFollowingMba, setIsFollowingMba] = useState(false);
    const [isFollowingPhilosophy, setIsFollowingPhilosophy] = useState(false);


  return (
    <div className='pt-[1.5rem] w-[24%] location-and-recommendation'>
        {/* location input field */}
        <div className='flex items-center pl-2 py-2  border-b gap-2'>
            <img src={location} alt='location'/>
            <input type='text' placeholder='Enter your location' className='placeholder:text-[#808080] focus:outline-none text-[14px] w-[80%]'/>
            <img src={cross} alt='cross' />
        </div>

        {/* static info displayed*/}
        <div className='flex gap-2 mt-[1.5rem] pl-2'>
            <img src={info} alt='info' className='w-[16px] h-[16px]'/>
            <p className='text-[13px] text-placeholderText'>Your location will help us serve better and extend a personalised experience.</p>
        </div>

        {
            isLoggedIn && 
            <div className='mt-[2.2rem]'>
                <div className='flex gap-2 pl-2'>
                    <img src={like} alt='like' className='w-[16.5px] h-[15px]'/>
                    <p className='uppercase tracking-widest text-[14px]'>Recommended Groups</p>
                </div>

                {/* groups suggestions */}
                {/* leisure */}
                <div className='flex items-center justify-between mt-[1rem]'>
                    <div className='flex items-center gap-3'>
                        <img src={leisure} alt='leisure' />
                        <p className='text-[14px]'>Leisure</p>
                    </div>
        
                    {
                        !isFollowingLeisure ? <button className='rounded-[14px] bg-lightGrayBg text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingLeisure(!isFollowingLeisure)}>Follow</button>
                        :
                        <button className='rounded-[14px] bg-black text-white text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingLeisure(!isFollowingLeisure)}>Following</button>
                    }
                </div>

                {/* activism */}
                <div className='flex items-center justify-between mt-[1rem]'>
                    <div className='flex items-center gap-3'>
                        <img src={activism} alt='activism' />
                        <p className='text-[14px]'>Activism</p>
                    </div>
        
                    {
                        !isFollowingActivism ? <button className='rounded-[14px] bg-lightGrayBg text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingActivism(!isFollowingActivism)}>Follow</button>
                        :
                        <button className='rounded-[14px] bg-black text-white text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingActivism(!isFollowingActivism)}>Following</button>
                    }
                </div>

                {/* mba */}
                <div className='flex items-center justify-between mt-[1rem]'>
                    <div className='flex items-center gap-3'>
                        <img src={mba} alt='mba' />
                        <p className='text-[14px]'>MBA</p>
                    </div>
        
                    {
                        !isFollowingMba ? <button className='rounded-[14px] bg-lightGrayBg text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingMba(!isFollowingMba)}>Follow</button>
                        :
                        <button className='rounded-[14px] bg-black text-white text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingMba(!isFollowingMba)}>Following</button>
                    }
                </div>

                {/* philosophy */}
                <div className='flex items-center justify-between mt-[1rem]'>
                    <div className='flex items-center gap-3'>
                        <img src={philosophy} alt='philosophy' />
                        <p className='text-[14px]'>Philosophy</p>
                    </div>
        
                    {
                        !isFollowingPhilosophy ? <button className='rounded-[14px] bg-lightGrayBg text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingPhilosophy(!isFollowingPhilosophy)}>Follow</button>
                        :
                        <button className='rounded-[14px] bg-black text-white text-[12px] py-[0.3rem] px-[0.5rem]' onClick={()=> setIsFollowingPhilosophy(!isFollowingPhilosophy)}>Following</button>
                    }
                </div>

                {/* see more */}
                <div className='mt-[2.5rem] text-right text-[12px]'>
                    <p className='text-freeAndJoinButtonColor'>See More...</p>
                </div>
                
            </div>
        }
    </div>
  )
}

export default LocationAndRecommended