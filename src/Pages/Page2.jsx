import React, { useContext } from 'react'
import About_Elem from '../Components/About_Elem'
import About from '../Components/About'
import { ThemeContext } from '../Context/Project_Context';


const Page2 = () => {
  const { dark} = useContext(ThemeContext);
  
  return (
    <div id='about' className={`w-screen ${dark? 'bg-black':'bg-[#fff]'} p-5`}>
        <About/>
        <About_Elem/>
    </div>
  )
}

export default Page2