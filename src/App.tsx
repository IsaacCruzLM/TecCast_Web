import React from 'react';
import ThemeProvider from './context/ThemeContext/themeProvider';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        TecCast
      </div>
    </ThemeProvider>
  );
}

export default App;
