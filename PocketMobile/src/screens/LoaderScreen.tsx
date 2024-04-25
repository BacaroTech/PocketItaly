import React, { useEffect } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IRouteNameList } from 'src/core/navigation.interface';
import { usePocketNavigation } from 'src/core/PokeNavigation';
import { IMAGELoader } from 'src/images';
import {
  BLACK,
  GeneralStyle,
  ORANGE,
} from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

const LoaderScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ORANGE,
    },
    boxFlex: {
        flex: 1,
    },
});
export const LoaderScreen = (): React.JSX.Element => {
    const navigation = usePocketNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {

        let page: IRouteNameList = 'Result';

        setTimeout(() => {
            if (isFocused) {
                navigation.navigate(page);
            } else {
                console.log('Splash is not focused');
            }
        }, 3000);
    }, [isFocused]);

    return (
        <View style={[tw``, LoaderScreenStyle.container]}>
            <View style={[LoaderScreenStyle.boxFlex, tw`mx-10 my-5 items-center`]}>
                <View style={[LoaderScreenStyle.boxFlex, tw`justify-end`]}>
                    <Text style={[tw`text-3xl font-extrabold `, { color: BLACK }]}>Stiamo generando il report di made in italy</Text>
                </View>
                <View style={[LoaderScreenStyle.boxFlex, tw`justify-center m-20`]}>
                    <Image
                        style={[tw``, GeneralStyle.splashLogo]}
                        source={IMAGELoader} />
                </View>
                <View style={[LoaderScreenStyle.boxFlex, tw`justify-start`]}>
                    <Text style={[tw`text-3xl`, { color: BLACK }]}>Aspetta ancora qualche secondo</Text>
                </View>
            </View>
        </View>
    );
};

