import React, {
  useEffect,
  useState,
} from 'react';

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
import {
  GeneralInput,
  GeneralStyle,
  GeneralSubmit,
  GeneralSumbitText,
  PURPLE,
} from 'src/utils';
import tw from 'twrnc';

const CodeAnalysisScreen = (prop: any) => {
    const {
        codeRead = '',
    } = prop?.route?.params || {};

    const navigation = usePocketNavigation();
    const [code, setCode] = useState('');
    const readCode = () => {
        navigation.navigate('CameraCode');
    };
    const sendCode = () => {
        navigation.navigate('Loader');
    };
    useEffect(()=> {
        console.log('update code', codeRead);
        setCode(codeRead);
    },[codeRead]);
    return (
        <PokeLayout logo={IMAGEcode}>
            <SafeAreaView style={[tw` mx-10 my-10 mb-20 flex flex-col gap-1`]}>
                <Text style={[tw`text-2xl`, GeneralStyle.white]}>Analisi Codice</Text>
                <Text style={[tw`text-xl`, GeneralStyle.white]}>Per utilizzare l'analisi tramite codice accedere alla telecamera</Text>
                <View style={[tw`mt-4`,GeneralSubmit]}>
                    <Pressable onPress={() => readCode()}>
                        <Text style={[GeneralSumbitText]}>Apri</Text>
                    </Pressable>
                </View>
                {code ? <><TextInput
                    style={[tw`mt-4`, GeneralInput]}
                    placeholder="Codice"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setCode(valueUpdated)}
                    defaultValue={code}
                    value={code}
                />
                    <View style={[tw`mt-4`, GeneralSubmit]} >
                        <Pressable onPress={() => sendCode()}>
                            <Text style={[GeneralSumbitText]}>Analizza</Text>
                        </Pressable>
                    </View></> : <></>}
            </SafeAreaView>
        </PokeLayout>
    );

};

export { CodeAnalysisScreen };
