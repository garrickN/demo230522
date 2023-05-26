import AppNavigator from './sources/appNavigator';
import RegisterPage from './sources/Screens/AuthStack/RegisterPage';
import MyContactsScreen from './sources/Screens/ListViewStack/ContactPage';
import { Provider as PaperProvider } from 'react-native-paper';
import 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import store from './sources/Screens/Redux/store';

import CounterScreen from './sources/Screens/Redux/index';

const App = () => {
  return (
    // <PaperProvider>
    //   <AppNavigator/>
    // </PaperProvider>
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
};

export default App;
