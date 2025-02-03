import React from 'react';
import { motion } from 'framer-motion';

const Page1_Footer = () => {
  return (
    <>
      <div className='w-5/6 text-base sm:text-xl lg:text-2xl sm:pt-[25vh] pt-[5vh] pl-[3vw] text-zinc-50 uppercase font-bold flex flex-col'>
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Website Design | Brand Design
        </motion.h1>
        <motion.h2
          className='font-light text-zinc-50 '
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          BESPOKE FREELANCE
        </motion.h2>
      </div>
    </>
  );
}

export default Page1_Footer;
