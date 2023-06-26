import React from 'react';
// import { AppNavigator } from './Navigation/appNavigator';
// import { ThemeContextProvider } from './Screens/ThemeStack';
// import { View } from 'react-native';
import AppContext from './Screens/useContextDemo/appContext';
// import { Provider } from 'react-redux';
// import store from './sources/Screens/Redux/store';
// import CounterScreen from './sources/Screens/Redux/index';

const App = () => {
  // return (
  //     <AppNavigator/>
  // );
  return <AppContext/>;
  //---------------
  // <Provider store={store}>
  //   <CounterScreen />
  // </Provider>
};
export default App;
