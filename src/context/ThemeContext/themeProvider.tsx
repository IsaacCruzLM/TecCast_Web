import React, { useState } from 'react';
import themeContext from './themeContext';
import { dark } from '../../styles/themes';

const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(dark);
  const contextValue = {
    theme: currentTheme,
    setCurrentTheme,
  };

  return (
    <themeContext.Provider value={contextValue}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
