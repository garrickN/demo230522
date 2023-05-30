import React from 'react';
import AppNavigator from './sources/appNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

// import { Provider } from 'react-redux';
// import store from './sources/Screens/Redux/store';
// import CounterScreen from './sources/Screens/Redux/index';

const App = () => {
  return (
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
  );
};
    //---------------
    // <Provider store={store}>
    //   <CounterScreen />
    // </Provider>

export default App;
