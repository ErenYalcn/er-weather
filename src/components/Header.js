import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import {Icon} from 'Icons'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';


export default function Header({isDarkMode, setIsDarkMode}) {



    
  return (
    <div className="m-auto">
        <div className={isDarkMode ? 'p-4 flex justify-between mx-3 sm:mx-8 items-center text-white' : 'p-4 flex justify-between mx-3 sm:mx-8 items-center'}>
            <div className="flex-1">
            {isDarkMode ? <Icon name="logow" size={24}/>: <Icon name="logo" size={24}/>}
            </div>
            
            <DarkModeToggle
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={65}
            />
            
            <div className="hidden sm:flex gap-x-6 items-center flex-1 justify-end">
                <span className="hover:opacity-70 transition-all"><a href="#"><AiFillGithub size={26}/></a></span>
                <span className="hover:opacity-70 transition-all"><a href="#"><BiWorld size={26}/></a></span>
                <span className="hover:opacity-70 transition-all"><a href="#"><AiFillLinkedin size={26}/></a></span>
            </div>

        </div>
    </div>
  )
}
