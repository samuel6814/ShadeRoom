"use client"

import { ThemeContext } from '../context/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

const ThemeProvider = ({ children }) => { // Added curly braces around children
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []
);
  return (
    <div className={theme}>{children}</div> // Added curly braces around children
  );
}

export default ThemeProvider;
