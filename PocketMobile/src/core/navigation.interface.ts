import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Splash: { name: string } | undefined;
    Home: { name: string } | undefined;
    Profile: { name: string } | undefined;
    Login: { name: string } | undefined;
    Register: { name: string } | undefined;
    LinkAnalysis: { name: string } | undefined;
    CodeAnalysis: { name: string, codeRead?: string } | undefined;
    PhotoAnalysis: { name: string } | undefined;
    Report: { name: string } | undefined;
    Education: { name: string } | undefined;
    Menu: { name: string } | undefined;
    CameraCode: { name: string } | undefined;
};

export type RouteNameList = {
    'Home': undefined,
    'Profile': undefined,
    'Splash': undefined,
    'Login': undefined,
    'Register': undefined,
    'LinkAnalysis': undefined,
    'CodeAnalysis': undefined,
    'PhotoAnalysis': undefined,
    'Report': undefined,
    'Education': undefined,
    'Menu': undefined,
    'CameraCode': undefined

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
