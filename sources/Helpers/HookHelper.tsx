import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RouteProp} from '@react-navigation/native';
import {RouteParamList} from '../Navigation/RouteParamList';

export const useGetNavigation = <T extends keyof RouteParamList | never>() => {
  type screenProps = NativeStackNavigationProp<RouteParamList>;
  let route;
  type RootRouteProps<RouteName extends keyof RouteParamList> = RouteProp<
    RouteParamList,
    RouteName
  >;
  route = useRoute<RootRouteProps<T>>();
  const navigation = useNavigation<screenProps>();
  return {
    navigation,
    route,
  };
};

// const store = configureStore().store;

// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector;
