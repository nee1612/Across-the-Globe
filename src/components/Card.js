import React from 'react'
import {BsEye} from 'react-icons/bs'
import {BsShareFill, BsThreeDots} from 'react-icons/bs'
import card1_bg from '../assets/card1_bg.png';
import card2_bg from '../assets/card2_bg.png';
import card3_bg from '../assets/card3_bg.png';
import calender from '../assets/calender.png';
import location from '../assets/location.png';
import suitcase from '../assets/suitcase.png';
import sarthak from '../assets/Sarthak_Kamra.png'
import sarah from '../assets/Sarah_West.png'
import ronal from '../assets/Ronal_Jones.png'
import joseph from '../assets/Joseph_Gray.png'
import article from '../assets/Article.png'
import education from '../assets/education.png'
import meetup from '../assets/meetup.png'
import job from '../assets/job.png'

const Card = ({card, id}) => {
  return (
    <div className=' border-2 border-lightGrayBg  mb-[10px] rounded-md'>
        {/* background images */}
        {
            (id ===1)?
            <img src={card1_bg} alt='bg' className='w-full'/>
            :
            (
                id ===2 ?
                <img src={card2_bg} alt='bg' className='w-full'/>
                :
                (
                    id ===3 ? <img src={card3_bg} alt='bg' className='w-full'/>:
                    null
                )
            )
        }

        <div className='p-[20px]'>
            {/* Type of card */}
            {
                (card.type === 'Article' && <img src={article} alt={card.type} className='h-[25px]'/>) ||

                (card.type === 'Education' && <img src={education} alt={card.type} className='h-[25px]'/>) ||

                (card.type === 'Meetup' && <img src={meetup} alt={card.type} className='h-[25px]'/>) ||

                (card.type === 'Job' && <img src={job} alt={card.type} className='h-[25px]'/>)
            }

            {/* title of card */}
            <div className='flex justify-between mt-[10px] '>
                <p className='text-[22px] font-semibold w-[80%] mb-[10px] card-title'>{card.title}</p>
                <button className='px-[0.6rem] py-[0.5rem] rounded-md place-self-start text-[18px]'><BsThreeDots/></button>
            </div>
            

            {
                id ===3 || id === 4? 
                    (id ===3 ? 
                        (
                            <div>
                                <div className=' flex gap-[5rem]'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={calender} alt='calender' className='w-[20px] h-[20px]'/>
                                        <p className='text-[15px] font-medium'>Fri, 12 Oct, 2018</p>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <img src={location} alt='location' className='w-[20px] h-[20px]'/>
                                        <p className='text-[15px] font-medium'>Ahmedabad, India</p>
                                    </div>
                                </div>
                                <button className='border rounded-md py-[10px] border-[#A9AEB8] text-center text-[13px] w-full mt-[15px] text-[#E56135] font-semibold'>Visit Website</button>
                            </div>
                        ):
                        (
                            <div>
                                <div className=' flex gap-10'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={suitcase} alt='suitcase' className='w-[20px] h-[20px]'/>
                                        <p className='text-[15px] font-medium'>Innovaccer Analytics Private Ltd.</p>
                                    </div>

                                    <div className='flex gap-2 items-center'>
                                        <img src={location} alt='location' className='w-[20px] h-[20px]'/>
                                        <p className='text-[15px] font-medium'>Noida, India</p>
                                    </div>
                                </div>
                                <button className='border rounded-md py-[10px] border-[#A9AEB8] text-center text-[13px] w-full mt-[15px] text-[#02B875] font-semibold'>Apply on Timesjobs</button>
                            </div>
                        )
                    ) 
                    :
                <p className='text-[19px] text-placeholderText mb-[20px] card-description'>{card.description}</p>
            }

            <div className='mt-[1.6rem] flex justify-between'>
                {/* user profile pic and name */}
                <div className='flex items-center gap-2'>
                    {
                        (id ===1)?
                        <img src={sarthak} alt='userprofile' className='w-[48px] h-[48px]'/>
                        :
                        (
                            id ===2 ?
                            <img src={sarah} alt='userprofile' className='w-[48px] h-[48px]'/>
                            :
                            (
                                id ===3 ? <img src={ronal} alt='userprofile' className='w-[48px] h-[48px]'/>
                                :
                                <img src={joseph} alt='userprofile' className='w-[48px] h-[48px]'/>
                            )
                        )
                    }  
                    <p className='text-[18px] font-semibold'>{card.author}</p> 
                </div>

                {/* views and share button */}
                <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-2'>
                        <BsEye className='text-[#525252] eye-icon'/>
                        <p className='text-[#525252] text-[14px] font-medium'>1.4k views</p>
                    </div>
                    
                    {/* share button */}
                    <button className='bg-lightGrayBg px-[0.6rem] py-[0.5rem] rounded-md'><BsShareFill/></button>
                </div>
            </div>
        </div>

        
        
        
    </div>
  )
}

export default Card