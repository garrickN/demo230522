/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './sources/com_miniapps_demoapp';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// import { Navigation } from 'react-native-navigation';
// import MapScreen from './sources/Screens/MapStack/mapScreen';
// import MapLinkScreen from './sources/Screens/MapStack/mapLinkScreen';

// Navigation.registerComponent('MapScreen', () => MapScreen);
// Navigation.registerComponent('MapLinkScreen', () => MapLinkScreen);

// Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         id: 'AppStack',
//         children: [
//           {
//             component: {
//               name: 'MapScreen',
//             },
//           },
//         ],
//       },
//     },
//   });
// });
