import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <View style={{ flex: 1, backgroundColor: `${theme.colors.background}` }}>
        <Routes />
      </View>
    </ThemeProvider>
  </NavigationContainer>
);

export default App;
