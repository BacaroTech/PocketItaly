import React, { useEffect } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { IRouteNameList } from 'src/core/navigation.interface';
import { usePocketNavigation } from 'src/core/PokeNavigation';
import { IMAGELoader, IMAGEsuccess } from 'src/images';
import {
  BLACK,
  GeneralStyle,
  ORANGE,
} from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

const ExchangeSuccessScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ORANGE,
    },
    boxFlex: {
        flex: 1,
    },
});
export const ExchangeSuccessScreen = (): React.JSX.Element => {
    const navigation = usePocketNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {

        let page: IRouteNameList = 'Home';

        setTimeout(() => {
            if (isFocused) {
                navigation.navigate(page);
            }
        }, 3000);
    }, [isFocused]);

    return (
        <View style={[tw``, ExchangeSuccessScreenStyle.container]}>
            <View style={[ExchangeSuccessScreenStyle.boxFlex, tw`mx-10 my-5 items-center`]}>
                <View style={[ExchangeSuccessScreenStyle.boxFlex, tw`justify-end`]}>
                    <Text style={[tw`text-3xl font-extrabold `, { color: BLACK }]}>
                        Scambio del token avvenuto
                    </Text>
                </View>
                <View style={[ExchangeSuccessScreenStyle.boxFlex, tw`justify-center m-20`]}>
                    <Image
                        style={[tw``, GeneralStyle.splashLogo]}
                        source={IMAGEsuccess} />
                </View>
            </View>
        </View>
    );
};

