import { DefaultTheme } from 'styled-components';

export const themeColors = {
  background: '#312e38',
  darkPurple: '#232129',
  gray1: '#666360',
  orange: '#ff9000',
  white1: '#ffffff',
  white2: '#f4ede8',
};

export const themeFonts = {
  RobotoSlabRegular: 'RobotoSlab-Regular',
  RobotoSlabMedium: 'RobotoSlab-Medium',
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fonts: { [key in keyof typeof themeFonts]: string };
  }
}

const theme: DefaultTheme = {
  colors: themeColors,
  fonts: themeFonts,
};

export default theme;
