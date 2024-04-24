/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import {
    Image,
    Text,
    View,
} from 'react-native';
import { IRouteNameList } from 'src/core/navigation.interface';
import { usePocketNavigation } from 'src/core/PokeNavigation';
import { IMAGElogo } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

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
        <View style={[tw`h-full flex flex-col justify-center`, GeneralStyle.container]}>
            <View style={[tw`p-10`]}>

                <Text>Caricamento</Text>
            </View>
        </View>
    );
};

