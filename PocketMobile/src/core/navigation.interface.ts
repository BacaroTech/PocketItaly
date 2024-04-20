
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
  } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Splash: { name: string } | undefined;
    Home: { name: string } | undefined;
    Profile: { name: string } | undefined;
    Login: { name: string } | undefined;
    Register: { name: string } | undefined,
};

export type RouteNameList = {
    'Home': undefined,
    'Profile': undefined,
    'Splash': undefined,
    'Login': undefined,
    'Register': undefined,

}
export type RootStackParamNameList = keyof RootStackParamList;
export type IRouteNameList = keyof RouteNameList;

export type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  IRouteNameList
>;

export type PocketScreenProps = NativeStackScreenProps<
  RootStackParamList,
  IRouteNameList
>;