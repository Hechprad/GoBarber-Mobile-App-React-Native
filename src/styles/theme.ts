import { DefaultTheme } from 'styled-components';

export const themeColors = {
  background: '#312e38',
  orange1: '',
  white: '#f4ede8',
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
