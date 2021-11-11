import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Account from './src/screens/Account';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}

          options={{
            headerTitleAlign: 'center',
            title: 'Abertura de conta',
          }}
        />
        <Stack.Screen name="Notifications" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
