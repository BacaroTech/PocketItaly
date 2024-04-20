import React from 'react';
import {
    NavigationContainer,
    useNavigation,
  } from '@react-navigation/native';
  import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProfileScreenNavigationProp, RootStackParamList } from './navigation.interface';
import { PocketSplashScreen } from 'src/screens/PocketSplashScreen';
import { LoginScreen } from 'src/screens/LoginScreen';
import { RegisterScreen } from 'src/screens/RegisterScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();


const PocketNavigation = () => {
    return (
        <NavigationContainer>
           <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                    headerTitle: '',

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
             </Stack.Navigator>
        </NavigationContainer>
    );
};
const usePocketNavigation = () => {
    const navigation = useNavigation<ProfileScreenNavigationProp>();
    return navigation;
}
export { PocketNavigation, usePocketNavigation };
