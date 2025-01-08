import React, { useContext } from 'react'
import Page3_Heading from '../Components/Page3_Heading'
import { ThemeContext } from '../Context/Project_Context';

const Page2 = () => {
  const { dark} = useContext(ThemeContext);
  
  return (
   <>
   <div id='projects' style={  dark? {background: 'radial-gradient(circle, white, black)'}: {background: 'radial-gradient(circle,#CB0000, #5031FF)'}} className="py-[5vh] w-screen">
    <Page3_Heading/>
   </div>
   </>
  )
}

export default Page2