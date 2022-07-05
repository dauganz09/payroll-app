import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Scan from './screens/Scan';
import Login from './screens/Login';
import Home from './screens/Home';

import Toast from 'react-native-toast-message';
import AddVaccine from './screens/AddVaccine';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Scan" component={Scan} options={{headerShown: false}}  />
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="AddVaccine" component={AddVaccine}  />

      
    </Stack.Navigator>
    <Toast />
  </NavigationContainer>
  );
}

