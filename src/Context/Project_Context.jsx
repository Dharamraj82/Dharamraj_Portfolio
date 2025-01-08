import React, { createContext, useState, useEffect } from 'react';
import TodoAppImage from '../assets/TodoApp.png'; 
import ModernWeb from '../assets/ModernWeb.png';
import Pureplanet from '../assets/Pureplanet.png';
import DocsDrag from '../assets/DocsDrag.png';
import BubbleGame from '../assets/BubbleGame.png';

export const DataContext = createContext();
export const ThemeContext = createContext();

const CombinedContextProvider = ({ children }) => {
  const data = [
    {
      "project_link": "https://dharamraj82.github.io/To-doList/",
      "project_img": TodoAppImage,
      "project_desc": "Modern Aesthetics Clean TO-DO App"
    },
    {
      "project_link": "https://dharamraj82.github.io/Modern-WebPages/",
      "project_img": ModernWeb, 
      "project_desc": "Sleek and minimalist interface designed to enhance user experience and simplicity"
    },
    {
      "project_link": "https://dharamraj82.github.io/Pure-Planet-HTML-CSS-JS-Project/",
      "project_img": Pureplanet, 
      "project_desc": "Beautiful And MindFress Website with clean UI"
    },
    {
      "project_link": "https://dharamraj82.github.io/Bubble-Game/",
      "project_img": BubbleGame, 
      "project_desc": "This Website And Play Beautiful Bubble Game With Beautiful UI And Responsivnes..."
    },
    {
      "project_link": "https://drag-docs-gamma.vercel.app/",
      "project_img": DocsDrag, 
      "project_desc": "Basic UI And Smooth With Resposive Website Viste..."
    }
  ];

  const [dark, setDark] = useState(true);

  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === null) {
      setDark(true); // Set default to true if no value is found
      localStorage.setItem('darkMode', 'true');
    } else {
      setDark(savedDarkMode === 'true');
    }
  }, []);

  const changeDark = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <DataContext.Provider value={data}>
      <ThemeContext.Provider value={{ dark, changeDark }}>
        {children}
      </ThemeContext.Provider>
    </DataContext.Provider>
  );
};

export default CombinedContextProvider;
