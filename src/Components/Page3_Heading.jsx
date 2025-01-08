import React, { useContext } from 'react';
import Projects from './Projects';
import Project_Context from '../Context/Project_Context';
import BoyLook from './BoyLook';
import { ThemeContext } from '../Context/Project_Context';

const Page3_Heading = () => {
  const { dark} = useContext(ThemeContext);
  return (
    <>
      <div className='h-full w-full flex justify-center items-center flex-col'>
        <div className='w-full flex flex-col justify-center items-center'>
          <div className='p-2 sm:p-4 lg:p-6 w-full flex justify-center items-center flex-col gap-20'>
            <h1 className={`${dark?'text-zinc-950':'text-[#ffff]'} pt-10 sm:pt-5 lg:pt-0 font-semibold uppercase text-3xl sm:text-5xl lg:text-8xl`}>
              My Latest Projects
            </h1>
          </div>
        </div>

        <div className='w-full h-[78%] mt-10'>
          <Project_Context>
            <Projects />
          </Project_Context>
        </div>
        <div className='w-full sm:hidden'>
          <BoyLook/>
        </div>
      </div>
    </>
  );
}

export default Page3_Heading;
