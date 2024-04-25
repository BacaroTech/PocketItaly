import React from 'react';

import { RightMenu } from 'src/components';
import {
  CodeAnalysisScreen,
  EducationScreen,
  MenuScreen,
  PhotoAnalysisScreen,
  ProfileScreen,
  ReportScreen,
} from 'src/screens';
import { HomeScreen } from 'src/screens/HomeScreen';
import { LoaderScreen } from 'src/screens/LoaderScreen';
import { LoginScreen } from 'src/screens/LoginScreen';
import { PocketSplashScreen } from 'src/screens/PocketSplashScreen';
import { ReadCodeScreen } from 'src/screens/ReadCodeScreen';
import { RegisterScreen } from 'src/screens/RegisterScreen';
import { ResultAnalysisScreen } from 'src/screens/ResultAnalysisScreen';
import { ORANGE } from 'src/utils';

import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  ProfileScreenNavigationProp,
  RootStackParamList,
} from './navigation.interface';

const Stack = createNativeStackNavigator<RootStackParamList>();


const PocketNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                    headerTitle: '',
                    headerStyle: { backgroundColor: ORANGE },
                    headerRight: () => <RightMenu />,

                }}
            >
                <Stack.Screen
                    name="Splash"
                    component={PocketSplashScreen}
                    options={{
                        title: 'Splash',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Login',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                        title: 'Register',
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                    }}
                />
                <Stack.Screen
                    name="Menu"
                    component={MenuScreen}
                    options={{
                        title: 'Menu',
                    }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: 'Profilo',
                    }}
                />
                <Stack.Screen
                    name="Education"
                    component={EducationScreen}
                    options={{
                        title: 'Istruzione',
                    }}
                />
                <Stack.Screen
                    name="Report"
                    component={ReportScreen}
                    options={{
                        title: 'Report',
                    }}
                />
                <Stack.Screen
                    name="LinkAnalysis"
                    component={ResultAnalysisScreen}
                    options={{
                        title: 'Analisi Link',
                    }}
                />
                <Stack.Screen
                    name="CodeAnalysis"
                    component={CodeAnalysisScreen}
                    options={{
                        title: 'Analisi Codice',
                    }}
                />
                <Stack.Screen
                    name="PhotoAnalysis"
                    component={PhotoAnalysisScreen}
                    options={{
                        title: 'Analisi Visiva',
                    }}
                />
                <Stack.Screen
                    name="CameraCode"
                    component={ReadCodeScreen}
                    options={{
                        title: 'Camera Code',
                    }}
                />
                <Stack.Screen
                    name="Loader"
                    component={LoaderScreen}
                    options={{
                        title: 'Caricamento',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Result"
                    component={ResultAnalysisScreen}
                    options={{
                        title: 'Risultato',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const usePocketNavigation = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return navigation;
};
export { PocketNavigation, usePocketNavigation };
