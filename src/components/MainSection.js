import React from 'react'
import ArticleNavbar from './ArticleNavbar'
import Card from './Card'
import {data} from '../data'
import LocationAndRecommended from './LocationAndRecommended'

const MainSection = ( {groupJoined, setGroupJoined, isLoggedIn, setIsLoggedIn} ) => {
  return (
    <main className='w-[73%] mx-auto mt-[50px] mb-[1rem] main-section-container'>
      <ArticleNavbar groupJoined={groupJoined}  setGroupJoined={setGroupJoined} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <div className='relative -z-20 top-[-0.1rem] bg-[#E0E0E0] w-full h-[0.1rem] mb-[30px] horizontal-rule'></div>

      <div className='flex justify-between left-part'>
        {/* left part -> cards */}
        <div className='w-[63%] cards-section'>
          {
            data.map((card)=><Card card={card} id={card.id} key={card.id}/>)
          }
        </div>
          

          {/* right part -> location and recommended groups */}
          <LocationAndRecommended isLoggedIn={isLoggedIn}/>
        </div>
      
    </main>
  )
}

export default MainSection