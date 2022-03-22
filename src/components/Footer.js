import React from 'react'
import {BiWorld} from 'react-icons/bi'
import{AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

export default function Footer({isDarkMode}) {
  return (
    <div className={isDarkMode ? 'flex items-center gap-x-3 mt-20 mx-auto justify-center text-white py-2 bg-ddark' : 'flex items-center gap-x-3 mt-20 mx-auto justify-center text-white py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}>
    <span className='text-cwhite tracking-widest whitespace-nowrap'>© 2022  Eren Yalçın</span>

    <div className='flex items-center gap-x-3'>
        <div className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
           <a href="https://erenyalcn.dev/">
           <BiWorld size={22}/>
           </a>
        </div>

        <div  className='text-[19px] hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
            <a href="https://github.com/ErenYalcn">
            <AiFillGithub size={22}/>
            </a>
        </div>

        <div  className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
            <a href="https://www.linkedin.com/in/erenyalcn/">
            <AiFillLinkedin size={22}/>
            </a>
        </div>
        
        <div  className='text-xl hover:bg-cwhite hover:text-black max-w-max p-[6px] rounded-full transition-all'>
            <a href="https://www.instagram.com/erenyalccn">
            <AiOutlineInstagram size={22}/>
            </a>
        </div>
        
        
    </div>


</div>
  )
}
