import React, { useContext } from 'react'
import { IoMdArrowForward } from "react-icons/io";
import aboutimage from '../assets/About.png';
import { ThemeContext } from '../Context/Project_Context';

const About = () => {
  const { dark} = useContext(ThemeContext);
  
  return (
    <>
    <div className={`about mb-5 w-full ${dark? 'text-zinc-200':'text-[#5031FF]'}  flex flex-col justify-center items-center gap-5 p-3`}>
        <div style={
          dark? {
            boxShadow: `rgba(255, 255, 255, 0.09) 0px 2px 1px,
                        rgba(255, 255, 255, 0.09) 0px 4px 2px,
                        rgba(255, 255, 255, 0.09) 0px 8px 4px,
                        rgba(255, 255, 255, 0.09) 0px 16px 8px,
                        rgba(255, 255, 255, 0.09) 0px 32px 16px`
                        }: {boxShadow: `rgba(0, 0, 0, 0.2) 0px 2px 1px,
                          rgba(0, 0, 0, 0.2) 0px 4px 2px,
                          rgba(0, 0, 0, 0.2) 0px 8px 4px,
                          rgba(0, 0, 0, 0.2) 0px 16px 8px,
                          rgba(0, 0, 0, 0.2) 0px 32px 16px`
              }} 
           className='h-[20.1vw] w-[20.1vw] md:h-[15.1vw] md:w-[15.1vw] rounded-full bg-white'>
            <img src={`${dark? 'https://i.postimg.cc/8zF0JHZ4/About.png' : 'https://i.postimg.cc/gj2FgGVF/Dharamraj-img-removebg-preview.png'}`} alt="" />
        </div>
            <h1 className='text-xl font-light uppercase'>Dharamraj Prasad Yadav</h1>
            <div className='w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold flex flex-col justify-center items-ceter text-center'>
            <h2 className=''>Build, host, and scale</h2>
            <h2>your collaborative website</h2>
            </div>
            <a href="https://drive.google.com/file/d/1QnSEZ_8SjdLV-pw_rmtGIsEcIPO_osRa/view?usp=sharing" target='_blank'>
            <button className={`rounded-full ${dark ? 'dark-button' : 'light-button'}`}><span className="text px-4 py-1 text-base sm:px-6 sm:py-2 sm:text-xl rounded-xl  font-medium gap-1 sm:gap-3 flex  justify-center items-center text-center">Resume <IoMdArrowForward/></span><span className='text-base sm:text-xl'>Thanks!</span></button>
        </a>
    </div>
    </>
  )
}

export default About