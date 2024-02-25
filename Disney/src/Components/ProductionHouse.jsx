import React from 'react'

import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import national from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwar from './../assets/images/starwar.png'

import disneyV from './../assets/Videos/disney.mp4'
import marvelV from './../assets/Videos/marvel.mp4'
import nationalV from './../assets/Videos/national-geographic.mp4'
import pixarV from './../assets/Videos/pixar.mp4'
import starwarV from './../assets/Videos/star-wars.mp4'

function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:national,
            video:nationalV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:1,
            image:starwar,
            video:starwarV
        }
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
       {productionHouseList.map((item)=>(
         <div className='border-[2px] border-gray-600 rounded-lg cursor-pointer
         hover:scale-110 transition-all duration-300 ease-in-out shadow-xl shadow-black'>
            
             <img src={item.image} className='w-full z-[1]' alt="" />
             <video src={item.video} autoPlay loop playsInline className='absolute top-0 rounded-md
              z-0 opacity-0 hover:opacity-50'></video>
             
         </div>
       ))}
    </div>
  )
}

export default ProductionHouse
