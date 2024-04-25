/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import {
  Image,
  View,
} from 'react-native';
import {
  IRouteNameList,
  usePocketNavigation,
} from 'src/core';
import { IMAGElogo } from 'src/images';
import { GeneralStyle } from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

export const PocketSplashScreen = (): React.JSX.Element => {
  const navigation = usePocketNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {

    let page: IRouteNameList = 'Login';

    setTimeout(() => {
      if (isFocused) {
        navigation.navigate(page);
      } else {
        console.log('Splash is not focused');
      }
    }, 3000);
  }, [isFocused]);

  return (
    <View style={[tw`h-full flex flex-col justify-center`, GeneralStyle.container]}>
      <View style={[tw`p-10`]}>
        <Image
          style={[tw`w-10 mt-10 mb-5`, GeneralStyle.splashLogo]}
          source={IMAGElogo} />
      </View>
    </View>
  );
};

