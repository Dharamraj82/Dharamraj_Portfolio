import React, { useContext } from 'react'
import { GrCode } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { VscCommentUnresolved } from "react-icons/vsc";
import { MdOutlineLanguage } from "react-icons/md";
import { ThemeContext } from '../Context/Project_Context';

const About_Elem = () => {
  const { dark} = useContext(ThemeContext);
  
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center'>
    <div className={`w-[90%] rounded-2xl ${dark? 'text-zinc-200':'text-[#4b2bfe92]'} flex flex-wrap overflow-hidden`}>
 <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 ${dark?'border-zinc-200/15':'border-[#ff000044]'} text-xl p-6 flex flex-col gap-3`}>
    <PiStudentBold className={`text-4xl ${dark? 'text-zinc-200':'text-[#2600ff]'}`}/>
  <div className='flex flex-col gap-1'>
  <h1 className={`font-semibold ${dark? 'text-zinc-200':'text-[#4b2bfe]'}`}>BCA Student</h1>
  <h2 className='font-normal'>
  3rd-year BCA, MCC Hazaribagh, Technical Knowledge</h2>
 </div>
  </div>
 <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2  ${dark?'border-zinc-200/15':'border-[#ff000044]'} text-xl p-6 flex flex-col gap-3`}>
    <GrCode className={`text-4xl ${dark? 'text-zinc-200':'text-[#2600ff]'}`}/>
  <div className='flex flex-col gap-1'>
  <h1 className={`font-semibold ${dark? 'text-zinc-200':'text-[#4b2bfe]'}`}>Skill coder</h1>
  <h2 className='font-normal'>
  React, HTML, CSS, JavaScript, DSA, Java, C, C++</h2>
 </div>
  </div>
 <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2 ${dark?'border-zinc-200/15':'border-[#ff000044]'} text-xl p-6 flex flex-col gap-3`}>
    <VscCommentUnresolved className={`text-4xl ${dark? 'text-zinc-200':'text-[#2600ff]'}`}/>
  <div className='flex flex-col gap-1'>
  <h1 className={`font-semibold ${dark? 'text-zinc-200':'text-[#4b2bfe]'}`}>Problem Solver</h1>
  <h2 className='font-normal'>
  Critical Thinking, Troubleshooting, Analytical Skills, Solutions-oriented</h2>
 </div>
  </div>
 <div className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 border-2  ${dark?'border-zinc-200/15':'border-[#ff000044]'} text-xl p-6 flex flex-col gap-3`}>
    <MdOutlineLanguage className={`text-4xl ${dark? 'text-zinc-200':'text-[#2600ff]'}`}/>
  <div className='flex flex-col gap-1'>
  <h1 className={`font-semibold ${dark? 'text-zinc-200':'text-[#4b2bfe]'}`}>Communication Abilities</h1>
  <h2 className='font-normal'>
  Effective, Bilingual, Clear, Collaborative, Adaptable</h2>
 </div>
  </div>
</div>
    </div>
    </>
  )
}

export default About_Elem