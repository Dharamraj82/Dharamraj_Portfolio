import React, { useContext } from "react";
import Page1_Text from "../Components/Page1_Text";
import FixedButtons from "../Components/FixedButtons";
import Page1_Footer from "../Components/Page1_Footer";
import bgImage1 from "../assets/Dharamraj Bg Image.png";
import bgImage2 from "../assets/Dharamraj Image Sm.png";
import { ThemeContext } from "../Context/Project_Context";
import { motion, useTransform } from "framer-motion";

const Page1 = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  const { dark } = useContext(ThemeContext);

  return (
    <>
      
      {/* Desktop View */}
      <motion.div
        style={{ 
          scale, 
          rotate 
        }}
        id="home"
        className="relative h-screen hidden md:block w-full p-2 lg:p-6 sm:p-3 pr-4 lg:pr-11 sm:pr-4"
      >
        <div
          style={
            dark
              ? { backgroundImage: `url(${bgImage1})` }
              : { backgroundImage: `url(https://i.postimg.cc/1RjvDNSy/Image-Color1.png)` }
          }
          className="h-full w-full rounded-[30px] sm:rounded-[50px] bg-gray-500 bg-center bg-cover"
        >
          <Page1_Text />
          <Page1_Footer />
        </div>
      </motion.div>

      {/* Mobile View */}
      <motion.div 
      style={{ 
        scale, 
        rotate 
      }}
      className="relative md:hidden h-screen w-full p-2 lg:p-6 sm:p-3 pr-3 lg:pr-7 sm:pr-4">
        <div
          style={
            dark
              ? { backgroundImage: `url(${bgImage2})` }
              : { backgroundImage: `url(https://i.postimg.cc/v8qNXNrF/image-Color2.png)` }
          }
          className="h-full w-full rounded-[30px] sm:rounded-[50px] bg-gray-500 bg-center bg-cover"
        >
          <Page1_Text />
          <Page1_Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Page1;
