import React, {useState} from 'react'
import {BsEye} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import facebook from '../assets/faceebook.png'
import signUpImage from '../assets/signUpImage.png'
import signuo from "../assets/signUpImage.png"
import {createPortal} from 'react-dom'

 function Modal ( {isLoggedIn , onClose} )  {
    const [isSignInClicked, setIsSignInClicked] = useState(false);

  return (
    !isLoggedIn && createPortal(
        // dark filter bg
        <div className='top-0 left-0 right-0 bottom-0 bg-[#00000088] absolute flex felx-col justify-center items-center min-w-[100%]   modal-dark-filter-bg'>
        {/* modal container */}
            <div className='bg-[#fff] w-[50%] py-5   flex flex-col rounded-lg modal-container relative'>
                <p className='text-center py-[10px] text-[14px] text-[#008A45] bg-[#EFFFF4] rounded-t-lg font-medium mb-[2rem] modal-top-banner  '>Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>

                <div className='w-[90%] mx-auto flex gap-5 modal-content-container '>
                    {/* left */}
                    <div className='w-[50%] modal-left-part '>
                        <h2 className='text-[24px] font-bold mb-[1.5rem]'>Create Account</h2>

                        <form>
                            <input type='text' placeholder="First Name" className='w-[50%] placeholder:text-placeholderText bg-lightGrayBg border border-[#D9D9DB] pl-[12px] py-[0.5rem] rounded-l-sm font-medium text-[15px]'/>
                            <input type='text' placeholder="Last Name" className='w-[50%] placeholder:text-placeholderText bg-lightGrayBg border border-[#D9D9DB] pl-[12px] py-[0.5rem] rounded-r-sm border-l-0 font-medium text-[15px]'/>

                            {/* email */}
                            <input type="email" placeholder='Email' className='w-full border-t-0 placeholder:text-placeholderText bg-lightGrayBg border border-[#D9D9DB] pl-[12px] py-[0.5rem]  font-medium text-[15px]'/>

                            {/* password */}
                            <div className='bg-lightGrayBg border border-[#D9D9DB]  border-t-0 flex '>
                                <input type="password" placeholder='Password' className='w-[90%]  placeholder:text-placeholderText bg-lightGrayBg  pl-[12px] py-[0.5rem]  font-medium text-[15px]'/>
                                <BsEye className='text-placeholderText  place-self-center'/>
                            </div>

                            {/* confirm password */}
                            <input type="password" placeholder='Confirm Password' className='w-full placeholder:text-placeholderText bg-lightGrayBg  pl-[12px] py-[0.5rem]  font-medium text-[15px] border border-[#D9D9DB]  border-t-0 rounded-b-sm'/>

                            {/* create account button */}
                            <input type="submit" value="Create Account" className='w-full bg-freeAndJoinButtonColor text-[14px] text-white font-semibold mt-[20px] py-[0.6rem] rounded-[20px] '/>
                        </form>

                        {/* signup with fb */}
                        <button type="submit" value="Create Account" className=' border-[#D9D9DB]  border w-full text-[14px] mt-[30px] py-[0.6rem] flex items-center justify-center gap-2 sign-up-with-fb'>
                        <img src={facebook} alt='facebook' className='h-[16px] '/>
                            <span className='text-[14px]'>Sign up with Facebook</span>
                        </button>

                        {/* signup with google */}
                        <button type="submit" value="Create Account" className=' border-[#D9D9DB]  border w-full text-[14px] mt-[10px] py-[0.6rem] flex items-center justify-center gap-2'>
                            <FcGoogle className='text-[16px]'/>
                            <span className='text-[14px]'>Sign up with Google</span>
                        </button>
                    </div>

                    {/* right */}
                    <div className='w-[50%] flex flex-col justify-between modal-right-part'>
                        <div className='flex flex-col items-end'>
                            <button className='text-[13px] align-right sign-in-text'>Already have an account? <span className='text-freeAndJoinButtonColor font-semibold '>Sign In</span></button>
                        {/* here was image */}
                            <img src={signuo} alt='createaccount' />
                        </div>

                        <p className='text-[11px] '>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>

            </div>
        </div>
    , document.body ) 
  )
}

export default Modal;