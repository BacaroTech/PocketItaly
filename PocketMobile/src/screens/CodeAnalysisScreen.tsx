import React, { useState } from 'react';

import {
  Pressable,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import { IMAGEcode } from 'src/images';
import { PURPLE } from 'src/utils';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const CodeAnalysisScreen = ({ }) => {
    const navigation = usePocketNavigation();
    const [code, setCode] = useState('');
    const readCode = () => {
        navigation.navigate('CameraCode');
    }
    const sendCode = () => {

    }
    return (
        <PokeLayout logo={IMAGEcode}>
            <SafeAreaView style={[tw` mx-10 my-10 mb-20 flex flex-col gap-1`]}>
                <Text style={[tw`text-2xl`, GeneralStyle.white]}>Analisi Codice</Text>
                <Text style={[tw`text-xl`, GeneralStyle.white]}>Inserisci il codice che vuoi analizzare</Text>
                <View style={[tw`mt-5`, GeneralStyle.submit]} >
                    <Pressable onPress={() => readCode()}>
                        <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Cattura dalla fotocamera</Text>
                    </Pressable>
                </View>
                <TextInput
                    style={[GeneralStyle.input]}
                    placeholder="Codice"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setCode(valueUpdated)}
                    defaultValue={code}
                    secureTextEntry={true}
                />
                <View style={[tw`mt-5`, GeneralStyle.submit]} >
                    <Pressable onPress={() => sendCode()}>
                        <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Analizza</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </PokeLayout>
    );

};

export { CodeAnalysisScreen };
