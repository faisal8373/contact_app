import { View, Text, LogBox } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CreateContact from './screens/CreateContact';
import MyContacts from './screens/MyContacts';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName='MyContacts'>
        <Stack.Screen name='MyContacts' component={MyContacts} />
        <Stack.Screen name='CreateContact' component={CreateContact} />
        <Stack.Screen name='Profile' component={Profile} />

      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App
