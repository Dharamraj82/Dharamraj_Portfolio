import React, { useState, useContext, useEffect } from 'react';
import { CgMenuGridO } from "react-icons/cg";
import { MdNightsStay, MdOutlineArrowUpward } from "react-icons/md";
import { MdArrowDownward } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { ThemeContext } from '../Context/Project_Context';
import { motion, useScroll} from 'framer-motion'

const FixedButtons = () => {
  const [menu, setMenu] = useState(false);
  const { dark, changeDark } = useContext(ThemeContext);
  const [showTopArrow, setShowTopArrow] = useState(false);
  const scrollYProgress = useScroll().scrollYProgress;

  const showMenu = () => {
    setMenu(!menu);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (showTopArrow) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setShowTopArrow(offset > 700); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <motion.div
            style={{ scaleX: scrollYProgress }}
            className={`w-full z-10 h-[6px] origin-left fixed rounded-full ${
              dark ? "bg-zinc-400" : "bg-blue-600"
            }`}
          ></motion.div>
    
      <div className='top-0 right-0 w-[320px] fixed z-10'>
        <div className='relative flex flex-col gap-2'>
          <div className='flex justify-end items-center lg:pr-24 lg:pt-10 pr-6 pt-5 sm:pr-16 sm:pt-7 gap-3'>
            <motion.div
              initial={{ 
                opacity: 0, y:-20, scale:0 
              }}
              animate={{ 
                opacity: 1, y:0, scale: 1, 
              }}
              transition={{ 
                duration: 1 
              }}
              whileHover={{ scale: 0.9 }}
              className={`${dark ? 'bg-zinc-950/85' : 'bg-[#5031ffca]'} ${dark ? 'hover:bg-zinc-950' : 'hover:bg-[#5031ff]'} sm:px-6 sm:py-3 px-5 py-2 text-white font-semibold rounded-full border-4 border-zinc-50 cursor-pointer transition-transform`}>
              Hire Me
            </motion.div>

            <motion.span
              initial={{ opacity: 0, scale: 0, y:-20, }}
              animate={{ opacity: 1, scale: 1, y:0}}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={changeDark}
              className='text-3xl sm:text-4xl cursor-pointer'>
              {dark ? <MdNightsStay className='text-zinc-600' /> : <IoSunny className='text-[#E4EA8C]' />}
            </motion.span>

            <motion.span
              initial={{ opacity: 0, scale: 0, y:-20, }}
              animate={{ opacity: 1, scale: 1, y:0,}}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={showMenu}
              className={`cursor-pointer ${dark ? 'text-gray-600' : 'text-gray-950'} text-4xl sm:text-5xl`}>
              <CgMenuGridO className='hover:scale-90' />
            </motion.span>
          </div>

          <div className='flex justify-end w-full items-center pr-5 sm:pr-10 md:pr-15 lg:pr-20'>
            {menu && (
              <div className={`uppercase  text-zinc-950/50 bg-zinc-50/10 backdrop-blur-md shadow-lg text-end rounded-lg flex items-end flex-col text-xl md:text-2xl lg:text-3xl gap-3 sm:gap-5 md:gap-7 lg:gap-9 p-4 font-bold`}>
                <a href="#" className='w-full'>
                  <h1 className='hover:bg-zinc-50/60 hover:text-zinc-900 rounded-md px-5 py-2 w-full transition-all duration-500 ease-in-out cursor-pointer'>
                    Home
                  </h1>
                </a>
                <a href="#about" className='w-full'>
                  <h1 className='hover:bg-zinc-50/60 hover:text-zinc-900 rounded-md px-5 py-2 w-full transition-all duration-500 ease-in-out cursor-pointer'>
                    About
                  </h1>
                </a>
                <a href="#projects" className='w-full'>
                  <h1 className='hover:bg-zinc-50/60 hover:text-zinc-900 rounded-md px-5 py-2 w-full transition-all duration-500 ease-in-out cursor-pointer'>
                    Projects
                  </h1>
                </a>
                <a href="#contact" className='w-full'>
                  <h1 className='hover:bg-zinc-50/60 hover:text-zinc-900 rounded-md px-5 py-2 w-full transition-all duration-500 ease-in-out cursor-pointer'>
                    Contact
                  </h1>
                </a>
                <a className='w-full' href="https://drive.google.com/file/d/1QnSEZ_8SjdLV-pw_rmtGIsEcIPO_osRa/view?usp=sharing" target='_blank' rel="noopener noreferrer">
                  <h1 className='hover:bg-zinc-50/60 hover:text-zinc-900 rounded-md px-5 py-2 w-full transition-all duration-500 ease-in-out cursor-pointer'>
                    Resume
                  </h1>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <motion.div 
         initial={{ opacity: 0, scale: 0, }}
         animate={{ opacity: 1, scale: 1,}}
         transition={{ duration: 0.5, delay: 1 }}
      className='bottom-0 right-0 fixed z-10'>
        <div className={` ${dark ? 'bg-zinc-50/60 border-2 border-zinc-950' : 'bg-zinc-50/60 border-2 border-blue-600'} hover:scale-75 transition duration-500 ease-in-out transform rounded-full w-[10vh] h-[10vh] flex justify-center text-center items-center`} onClick={handleClick}>
          <span className='text-xl sm:text-3xl md:text-5xl lg:text-6xl cursor-pointer'>
            {showTopArrow ? <MdOutlineArrowUpward className={`${dark ? 'text-zinc-950':'text-blue-600'}`}/> : <MdArrowDownward className={`${dark ?'text-zinc-950':'text-blue-600'}`}/>}
          </span>
        </div>
      </motion.div>
    </>
  );
}

export default FixedButtons;
