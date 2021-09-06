import { createContext } from 'react';
import { dark } from '../../styles/themes';

type ThemeType = {
  theme: object;
}

const initialTheme = {
  theme: dark,
};

const themeContext = createContext<ThemeType>(initialTheme);

export default themeContext;
