import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import MyContactsScreen from '../Screens/ListViewStack/ContactPage';
import RegisterPage from '../Screens/AuthStack/RegisterPage';
import LoginPage from '../Screens/AuthStack/LoginPage';
import InformationPage from '../Screens/ListViewStack/InformationPage';
import { Easing } from 'react-native';
import { ThemeContextProvider} from '../Screens/ThemeStack';

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
  },
} as any;

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 200,
    easing: Easing.linear,
  },
} as any;

const AppNavigator = () => (
    <ThemeContextProvider>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
        <Stack.Screen name="Login" component={LoginPage} options={{headerShown:false}}/>
        <Stack.Screen name="Contact" component={MyContactsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterPage}/>
        <Stack.Screen name="Information" component={InformationPage} options={{headerShown:false}}/>
      </Stack.Navigator>
    </ThemeContextProvider>
);

export {AppNavigator};
