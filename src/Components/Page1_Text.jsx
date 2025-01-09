import React, { useContext } from 'react'
import { ThemeContext } from '../Context/Project_Context';

const Page1_Text = () => {
  const { dark} = useContext(ThemeContext);
  
  return (
    <>
    <div className='w-5/6 text-4xl sm:text-5xl lg:text-7xl sm:pt-[25vh] pt-[15vh] pl-[3vw]  text-zinc-50 uppercase font-bold flex flex-col'>
        <h1>I Am <span className={` ${dark ?'text-zinc-950':'text-[#2600ff]'}`}>Website</span></h1>
        <h1>Devloper</h1>
        <h1>Hire Me</h1>
    </div>
    </>
  )
}

export default Page1_Text
