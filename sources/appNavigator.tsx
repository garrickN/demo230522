import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import MyContactsScreen from './Screens/ListViewStack/ContactPage';
import RegisterPage from './Screens/AuthStack/RegisterPage';
import LoginPage from './Screens/AuthStack/LoginPage';
import InformationPage from './Screens/ListViewStack/InformationPage';
import { Easing } from 'react-native';

const Stack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
} as any

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  }
} as any

const AppNavigator = () => (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Contact'
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name='Login' component={LoginPage} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Contact' component={MyContactsScreen} options={{headerShown:false}}></Stack.Screen>
        <Stack.Screen name='Register' component={RegisterPage} ></Stack.Screen>
        <Stack.Screen name='Information' component={InformationPage} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
  </NavigationContainer>
  
)

export default AppNavigator;