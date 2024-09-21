import React from 'react'
import ProfileCard from '../components/ProfileCard'
import { cardData } from '../Utils/constant/cardData'


const Home = () => {
  return (
    <div>
       <div className='w-full h-screen flex justify-center items-center gap-4 overflow-auto flex-wrap ' >
   {
    cardData.map((item,index)=>{
      return (
        <ProfileCard key={index} data={item} />
      )
    })
   }

   
    </div>
    </div>
  )
}

export default Home
