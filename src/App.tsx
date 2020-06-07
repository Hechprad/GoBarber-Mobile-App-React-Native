import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

// import 'react-native-gesture-handler';
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// }
const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View style={{ flex: 1, backgroundColor: '#312e38' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
