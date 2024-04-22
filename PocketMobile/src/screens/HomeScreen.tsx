import React from 'react';

import {
  Pressable,
  Text,
  View,
} from 'react-native';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import { IRouteNameList } from 'src/core/navigation.interface';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const HomeScreen = ({ }) => {
    const navigation = usePocketNavigation();

    const goTo = (dest: IRouteNameList) => {
        navigation.navigate(dest);
    };
    return (
        <PokeLayout>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Home</Text>
            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('LinkAnalysis')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Analisi Link</Text>
                </Pressable>
            </View>
            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('CodeAnalysis')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Analisi Codice</Text>
                </Pressable>
            </View>
            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('CodeAnalysis')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Analisi Visiva</Text>
                </Pressable>
            </View>
            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('Profile')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Profilo</Text>
                </Pressable>
            </View>

            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('Report')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Report</Text>
                </Pressable>
            </View>

            <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                <Pressable onPress={() => goTo('Education')}>
                    <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Istruzione</Text>
                </Pressable>
            </View>
        </PokeLayout>
    );

};

export { HomeScreen };
