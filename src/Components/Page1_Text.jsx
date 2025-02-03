import React, { useContext } from 'react';
import { ThemeContext } from '../Context/Project_Context';
import { motion } from 'framer-motion';

const Page1_Text = () => {
  const { dark } = useContext(ThemeContext);

 

  return (
    <>
      <div className='w-5/6 text-4xl sm:text-5xl lg:text-7xl sm:pt-[25vh] pt-[15vh] pl-[3vw] text-zinc-50 uppercase font-bold flex flex-col'>
        <motion.h1
          initial={{
            opacity: 0, x: -50
          }}
          animate={{ 
              opacity: 1, x: 0 
            }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          I Am <span className={` ${dark ? 'text-zinc-950' : 'text-[#2600ff]'}`}>Website</span>
        </motion.h1>
        <motion.h1
           initial={{
            opacity: 0, x: -50
          }}
          animate={{ 
              opacity: 1, x: 0 
            }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Developer
        </motion.h1>
        <motion.h1
       initial={{
        opacity: 0, x: -50
      }}
      animate={{ 
          opacity: 1, x: 0 
        }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          Hire Me
        </motion.h1>
      </div>
    </>
  );
}

export default Page1_Text;