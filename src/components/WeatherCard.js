import React from 'react'
import Search from './Search'
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { GiWindSlap } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';


export default function WeatherCard({isDarkMode, setIsDarkMode}) {
  return (
    <div className='w-[80%] sm:w-[60%] lg:w-[40%] m-auto h-auto shadow-lg rounded-lg flex flex-col p-6 mt-2 sm:mt-8'>
      <Search isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <div>
        <div>
          <h2 className={isDarkMode ? 'text-2xl font-bold text-white' : 'text-2xl font-bold'}>Ankara, TR</h2>
          <p className='text-sm text-lightgray text-opacity-70'>Çarşamba, 4:42 dağınık bulutlu.</p>
        </div>
        <div className='flex justify-between mx-4'>
          <div className='mt-12 mb-8'>
            <span className='text-[76px] text-lightgray'>10°</span>
            <p className='text-sm text-lightgray'>hissedilen sıcaklık 6°</p>
          </div>
          <div className='mt-12 mb-8'>
            <TiWeatherPartlySunny size={112} color="#6366f1" />
          </div>
        </div>
        <div className='flex gap-x-4 ml-[1rem]'>
          <span className='flex items-center gap-x-2 text-lightgray'><GiWindSlap size={18} color="#6366f1"/> 18m/s rüzgarlı</span>
          <span className='flex items-center gap-x-2 text-lightgray'><WiHumidity size={28} color="#6366f1"/> 31% nemli</span>
        </div>

      </div>
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


      </div>
    </div>
  )
}
