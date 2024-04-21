import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { usePocketNavigation } from 'src/core/PokeNavigation';
import { IRouteNameList } from 'src/core/navigation.interface';
import { IMAGElogo } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

export const PocketSplashScreen = (): React.JSX.Element => {
    const navigation = usePocketNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {

      let page: IRouteNameList = 'Login';
    //   if (data?.isAuthenticated) {
    //       page = 'Home';
    //   }

      setTimeout(() => {
        if (isFocused) {
          navigation.navigate(page);
        } else {
          console.log('Splash is not focused');
        }
      }, 3000);
    }, [isFocused]);

    return (
        <View style={[tw`h-full`, GeneralStyle.container]}>
          <View style={[tw`w-1/2`]}>
          <Image
            style={[tw`m-auto mt-50 mb-5 rounded-full`, GeneralStyle.splashLogo]}
            source={IMAGElogo} />
          </View>
          <Text style={[tw`text-center text-8xl `, GeneralStyle.title]}>Pocket Italy</Text>
          <Text style={[tw`text-center text-5xl mt-3 `, GeneralStyle.title]}>Pocket Italy</Text>
        </View>
      );
};

