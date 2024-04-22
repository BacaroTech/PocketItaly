import React, { useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import GeneralStyle, { FontFamilyName } from 'src/utils/GeneralStyle';
import {
  ORANGE,
  PURPLE,
  WHITE,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const LoginStyle = StyleSheet.create({
    containerLogin: {
        flex: 1,
    },
    link: {
        color: ORANGE,
        fontSize: 18,
        textAlign: 'right',
        marginBottom: 20,
        fontFamily: FontFamilyName,
    },
    account: {
        marginTop: 10,
        color: WHITE,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: FontFamilyName,
    },
});
const LoginScreen = ({ }) => {
    console.log('LOGIN');

    const navigation = usePocketNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        navigation.navigate('Home');
    };

    const goToRegistration = () => {
        navigation.navigate('Register');
    };
    return (
        <PokeLayout>
            <SafeAreaView style={[tw` mx-10 my-10 mb-20 flex flex-col gap-2`]}>
                <TextInput
                    style={[GeneralStyle.input]}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setEmail(valueUpdated)}
                    defaultValue={email}
                />
                <TextInput
                    style={[GeneralStyle.input]}
                    placeholder="Password"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setPassword(valueUpdated)}
                    defaultValue={password}
                    secureTextEntry={true}
                />


                <View style={[tw`mt-5`, GeneralStyle.submit]} >
                    <Pressable onPress={() => login()}>
                        <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Login</Text>
                    </Pressable>
                </View>

                <Text style={[LoginStyle.account]}>
                    Non hai ancora  un account? {'\n'} Registrati subito!
                </Text>

                <View style={[tw`m-1`, GeneralStyle.submitRegistration]} >
                    <Pressable onPress={() => goToRegistration()}>
                        <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Registrati</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </PokeLayout>
    );

};

export { LoginScreen };
