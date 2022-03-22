import React from 'react'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiWindSlap } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { RiSearch2Line } from 'react-icons/ri';
import { Icon } from 'Icons';



export default function WeatherCard({isDarkMode, setIsDarkMode, state, setGetState, inputHandler, submitHandler, getState, apiData, kelvinToFarenheit, fixedSpeed, isTurn}) {


  var d = new Date();
  var gunler= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  


console.log(isTurn)

  return (
    <div className='w-[80%] sm:w-[60%] lg:w-[40%] m-auto h-auto shadow-lg rounded-lg flex flex-col p-6 mt-2 sm:mt-8'>
          <div className='flex items-center gap-x-4 p-4 border-b-2 mb-6'>
        <RiSearch2Line size={24} color="#6366f1" />
        <input id="arama" onChange={inputHandler} value={getState} className={isDarkMode ? 'text-white bg-ddark outline-none text-[16px] w-full sm:w-[20rem] placeholder-white placeholder-opacity-80' : 'text-black outline-none text-[16px] w-full sm:w-[20rem] placeholder-black placeholder-opacity-80'} placeholder='Lokasyona göre arama yap'></input>
        <div className='animate-spin'>{isTurn ? (<AiOutlineLoading3Quarters color={isDarkMode ? "white":"#6366f1"} />): null}</div>

    </div>
    {apiData.main ? (
      <div>
        <div>
          <h2 className={isDarkMode ? 'text-2xl font-bold text-white' : 'text-2xl font-bold'}>{apiData.name}, {apiData.sys.country}</h2>
          <p className='text-sm text-lightgray text-opacity-70'>{gunler[d.getDay()]}, {apiData.name}  {apiData.weather[0].description}.</p>
        </div>
        <div className='flex justify-between mx-4'>
          <div className='mt-12 mb-8'>
            <span className='text-[76px] text-lightgray'>{kelvinToFarenheit(apiData.main.temp)}&deg;</span>
            <p className='text-sm text-lightgray'>hissedilen sıcaklık {kelvinToFarenheit(apiData.main.feels_like)}&deg;</p>
          </div>
          <div className='mt-12 mb-8'>
            <TiWeatherPartlySunny size={112} color="#6366f1" />
          </div>
        </div>
        <div className='flex gap-x-4 ml-[1rem]'>
          <span className='flex items-center gap-x-2 text-lightgray'><GiWindSlap size={18} color="#6366f1"/> {fixedSpeed(apiData.wind.speed)} m/s rüzgarlı</span>
          <span className='flex items-center gap-x-2 text-lightgray'><WiHumidity size={28} color="#6366f1"/> {apiData.main.humidity}% nemli</span>
        </div>

      </div>) : (
      <div className='flex flex-col'>
        <Icon name="noresult" />
        <p className='text-2xl w-full mx-auto text-center text-lightgray'>Üzgünüz, aradığınız bölgeyi bulamadık.</p>
      </div>)}
      {apiData.main ? (
      <div className='mx-auto'>
          <p className='text-2xl text-lightgray my-4 border-b-2 pb-2'>Dışarısı bulutlu ve fırtınalı, ceket giymelisin</p>


          <ul className='flex flex-col'>
            <li className='py-2'>
              <div className='flex flex-row text-lg text-lightgray'>
                <p className='flex-1 '>Çarşamba</p>
                <span className='mx-auto'><TiWeatherPartlySunny size={27} color="#6366f1"/></span>
                <p className='flex-1 text-right'><span>17°</span> / <span>10°</span></p>
              </div>
            </li>
            <li className='py-2'>
              <div className='flex flex-row text-lg text-lightgray'>
                <p className='flex-1 '>Perşembe</p>
                <span className='mx-auto'><TiWeatherPartlySunny size={27} color="#6366f1"/></span>
                <p className='flex-1 text-right'><span>17°</span> / <span>10°</span></p>
              </div>
            </li>
            <li className='py-2'>
              <div className='flex flex-row text-lg text-lightgray'>
                <p className='flex-1 '>Cuma</p>
                <span className='mx-auto'><TiWeatherPartlySunny size={27} color="#6366f1"/></span>
                <p className='flex-1 text-right'><span>17°</span> / <span>10°</span></p>
              </div>
            </li>
            <li className='py-2'>
              <div className='flex flex-row text-lg text-lightgray'>
                <p className='flex-1 '>Cumartesi</p>
                <span className='mx-auto'><TiWeatherPartlySunny size={27} color="#6366f1"/></span>
                <p className='flex-1 text-right'><span>17°</span> / <span>10°</span></p>
              </div>
            </li>
            <li className='py-2'>
              <div className='flex flex-row text-lg text-lightgray'>
                <p className='flex-1 '>Pazar</p>
                <span className='mx-auto'><TiWeatherPartlySunny size={27} color="#6366f1"/></span>
                <p className='flex-1 text-right'><span>17°</span> / <span>10°</span></p>
              </div>
            </li>

     
   
            
          </ul>


      </div>) : null}
    </div>
  )
}
