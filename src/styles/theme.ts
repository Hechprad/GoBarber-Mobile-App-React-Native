import { DefaultTheme } from 'styled-components';

export const themeColors = {
  background: '#312e38',
  darkPurple: '#232129',
  gray1: '#666360',
  orange: '#ff9000',
  white1: '#ffffff',
  white2: '#f4ede8',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
  }
}

const theme: DefaultTheme = {
  colors: themeColors,
};

export default theme;
