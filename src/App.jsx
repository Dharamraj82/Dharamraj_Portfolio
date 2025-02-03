import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import ConnectPage from "./Pages/ConnectPage";
import ContactPage from "./Pages/ContactPage";
import FixedButtons from "./Components/FixedButtons";

const App = () => {
  const containerRef = useRef(); 
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="w-screen overflow-x-hidden relative">
      <FixedButtons/>
      <Page1 scrollYProgress={scrollYProgress} />
      <Page2 scrollYProgress={scrollYProgress} />
      <Page3 scrollYProgress={scrollYProgress} />
      <ContactPage scrollYProgress={scrollYProgress} />
      <ConnectPage scrollYProgress={scrollYProgress} /> 
    </main>
  );
};

export default App;
