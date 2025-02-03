import React, { useContext } from 'react'
import About_Elem from '../Components/About_Elem'
import About from '../Components/About'
import { ThemeContext } from '../Context/Project_Context';
import { motion, useTransform } from "framer-motion";

const Page2 = ({ scrollYProgress }) => {
   const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
   const rotate = useTransform(scrollYProgress, [0, 1], [6, -15]);

  const { dark} = useContext(ThemeContext);
  
  return (
    <motion.div
    style={{ 
      scale, 
      rotate 
    }} 
    id='about' className={`w-screen ${dark? 'bg-black':'bg-[#fff]'}  rounded-3xl p-5`}>
        <About/>
        <About_Elem/>
    </motion.div>
  )
}

export default Page2