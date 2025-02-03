import React, { useContext } from 'react'
import Page3_Heading from '../Components/Page3_Heading'
import { ThemeContext } from '../Context/Project_Context';
import { motion, useTransform } from "framer-motion";

const Page3 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);  
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const { dark} = useContext(ThemeContext);
  
  return (
   <>
   <motion.div 
        style={{
          scale,
          rotate,
          background: dark
            ? "radial-gradient(circle, white, black)"
            : "radial-gradient(circle, #CB0000, #5031FF)",
        }}
        id="projects"
        className="py-[5vh] w-screen rounded-3xl"
      ><Page3_Heading/>
   </motion.div>
   </>
  )
}

export default Page3