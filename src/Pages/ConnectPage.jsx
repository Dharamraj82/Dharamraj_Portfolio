import React, { useContext } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { ThemeContext } from '../Context/Project_Context';

const ConnectPage = () => {
  const { dark} = useContext(ThemeContext);
    return (
    <>
    <div id='connect' className={`${dark?'bg-black text-white':'bg-white text-zinc-950'} w-full h-screen`}>
       <div className='flex flex-col px-[6vw] py-[10vh] gap-[9vh] md:gap-[8vh]'>
            <div className='text-[44px] sm:text-5xl md:text-6xl lg:text-7xl font-light'>
                <h1>Connect with us</h1>
            </div>
            <div>
            <a href="https://www.linkedin.com/in/dharamraj-prasad-yadav/" target='_blank'>
            <div className={`group py-[6vh] text-xl sm:text-2xl md:text-3xl  font-normal flex flex-row justify-between items-center border-t-[1px] border-b-[1px] ${dark?'border-zinc-50/80':'border-zinc-950/80'} cursor-pointer`}>
                <h1 className='group-hover:scale-105 transform transition-transform duration-300'>
                    Linkedin
                </h1>
                <GoArrowUpRight className='group-hover:scale-125 transform transition-transform duration-500'/>
            </div>
            </a>
            <a href="https://www.instagram.com/dharamraj_pd_yadav/?hl=en" target='_blank'>
            <div className={`group py-[6vh] text-xl sm:text-2xl md:text-3xl  font-normal flex flex-row justify-between items-center border-b-[1px]  ${dark?'border-zinc-50/80':'border-zinc-950/80'} cursor-pointer`}>
                <h1 className='group-hover:scale-105 transform transition-transform duration-300'>
                    Instagram
                </h1>
                <GoArrowUpRight className='group-hover:scale-125 transform transition-transform duration-500'/>
            </div>
            </a>
            <a href="https://github.com/Dharamraj82" target='_blank'>
            <div className={`group py-[6vh] text-xl sm:text-2xl md:text-3xl  font-normal flex flex-row justify-between items-center border-b-[1px] ${dark?'border-zinc-50/80':'border-zinc-950/80'} cursor-pointer`}>
                <h1 className='group-hover:scale-105 transform transition-transform duration-300'>
                    Github
                </h1>
                <GoArrowUpRight className='group-hover:scale-125 transform transition-transform duration-500'/>
            </div>
            </a>
        </div>
       </div>
          <h1 className='mt-16 text-base text-center sm:text-xl lg:text-2xl text-zinc-500'>
            ©  Dharamraj 2025 | designed and developed
          </h1> 
          
    </div>
    </>
  )
}

export default ConnectPage