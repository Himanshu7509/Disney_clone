import React, { useState } from 'react'
import logo from './../assets/images/logo.png'
import Uacc from './../assets/images/user.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';

function Header() {
  const [toggle,setToggle]=useState(false);
    const menu=[
        {
            name: 'HOME',
            icon:HiHome
        },
        {
            name: 'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name: 'WATCHLIST',
            icon:HiPlus
        },
        {
          name: 'ORIGNAL',
          icon:HiStar
        },
        {
            name: 'MOVIES',
            icon:HiPlayCircle
        },
        {
            name: 'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center gap-8 justify-between p-1'>
      <div className='flex  items-center gap-8'>
      <img src={logo} className='w-[80px] md:w-[100px] object-cover ' alt="" />
      <div className='hidden md:flex gap-8'>
      {menu.map((item)=>(
        <Headeritem name={item.name} Icon={item.icon} />
      ))}
      </div>
      <div className='flex md:hidden gap-5'>
      {menu.map((item,index)=>index<3&&(
        <Headeritem name={''} Icon={item.icon} />
      ))}
        <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
          <Headeritem name={''} Icon={HiDotsVertical}/>
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map((item,index)=>index>2&&(
             <Headeritem name={item.name} Icon={item.icon} />
               ))}
            </div>:null}
        </div>
      </div>
      </div>
        <img src={Uacc} alt=""  className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header
