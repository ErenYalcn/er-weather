import React from 'react'
import { RiSearch2Line } from 'react-icons/ri';


export default function Search({isDarkMode}) {
  return (
    <div className='flex items-center gap-x-4 p-4 border-b-2 mb-6'>
        <RiSearch2Line size={24} color="#6366f1" />
        <input className={isDarkMode ? 'text-white bg-ddark outline-none text-[16px] w-full sm:w-[20rem] placeholder-white placeholder-opacity-80' : 'text-black outline-none text-[16px] w-full sm:w-[20rem] placeholder-black placeholder-opacity-80'} placeholder='Lokasyona göre arama yap'></input>
    </div>
  )
}
