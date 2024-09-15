// ThemeContext.js
import React, { createContext, useState } from 'react';

// Tạo Context
const ThemeContext = createContext();

// Tạo Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Trạng thái chủ đề

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
