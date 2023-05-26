import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MyContactsScreen from './Screens/ListViewStack/ContactPage';
import RegisterPage from './Screens/AuthStack/RegisterPage';
import LoginPage from './Screens/AuthStack/LoginPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={LoginPage} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Contact' component={MyContactsScreen} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name='Register' component={RegisterPage}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  
)

export default AppNavigator;