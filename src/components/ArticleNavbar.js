import React from 'react'
import join from '../assets/join_grp_Img.png'
import leave from '../assets/leave.png'
import Modal from './Modal'

const ArticleNavbar = ( {groupJoined, setGroupJoined, isLoggedIn, setIsLoggedIn} ) => {
  return (
    <div className='flex justify-between h-[3.5rem] navbar-top-header'>
        {/* left part-> nav */}
        <div className='ml-2 article-navbar-header'>
            <div className='flex gap-5 cursor-pointer relative h-full'>
                
                <div className=' w-fit'>
                    <p className='h-full border-b-2 border-black article-navbar-header'>All Posts(32)</p>
                </div>

                <div className='text-placeholderText article-navbar-header'>Article</div>
                <div className='text-placeholderText article-navbar-header'>Event</div>
                <div className='text-placeholderText article-navbar-header'>Education</div>
                <div className='text-placeholderText article-navbar-header'>Job</div>
            </div>
        </div>

        {/*  right part -> button and write dropdown */}
        <div className='flex gap-5 place-self-start '>
            {/* dropdown */}
            <select className='font-semibold bg-lightGrayBg text-[15px] px-[0.5rem] py-[0.6rem] rounded-md focus:outline-none article-navbar-header'>
                <option >Write a Post</option>
            </select>

            {/* join / leave button */}
            {
                groupJoined === false ? 
                <button className='bg-freeAndJoinButtonColor text-[#ffffff] flex items-center gap-2 px-[0.65rem] text-[15px] rounded-md transition-all duration-100 join-group ' onClick={()=>setGroupJoined(!groupJoined)}>
                <img src={join} alt='join button' className='article-navbar-header'/>
                <p>Join Group</p>
                </button> 
                : 
                <button className='border-placeholderText border-2  text-placeholderText font-semibold flex items-center gap-2 px-[0.65rem] text-[15px] rounded-md transition-all duration-100 join-group ' onClick={()=>setGroupJoined(!groupJoined)}>
                    <img src={leave} alt='join button' className='article-navbar-header'/>
                    <p>Leave Group</p>
                    <Modal isLoggedIn = {isLoggedIn} onClose = {()=> setIsLoggedIn(false)}/>
                </button>
                
            
            }       
        </div>

        <div className='hidden mobile-article-navbar w-full items-center px-[1rem]'>
                <p className='text-[14px] font-extrabold'>Posts(368)</p>
                <select className='font-semibold bg-lightGrayBg text-[13px] px-[0.5rem] py-[0.6rem] rounded-md focus:outline-none'>
                    <option>Filter: All</option>
                </select>
            </div>
        
    </div>
  )
}

export default ArticleNavbar