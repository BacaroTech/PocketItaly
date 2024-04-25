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
import {
  FontFamilyName,
  GeneralInput,
  GeneralRegister,
  GeneralSubmit,
  GeneralSumbitText,
  ORANGE,
  PURPLE,
  WHITE,
} from 'src/utils';
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
            <SafeAreaView style={[tw` mx-10 my-10 mb-20 flex flex-col gap-5`]}>
                <TextInput
                    style={[GeneralInput]}
                    placeholder="Email"
                    keyboardType="email-address"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setEmail(valueUpdated)}
                    defaultValue={email}
                />
                <TextInput
                    style={[GeneralInput]}
                    placeholder="Password"
                    placeholderTextColor={PURPLE}
                    onChangeText={valueUpdated => setPassword(valueUpdated)}
                    defaultValue={password}
                    secureTextEntry={true}
                />


                <View style={[GeneralSubmit]} >
                    <Pressable onPress={() => login()}>
                        <Text style={[GeneralSumbitText]}>Login</Text>
                    </Pressable>
                </View>

                <View style={[tw`mt-10`]}>
                    <Text style={[LoginStyle.account]}>
                        Non hai ancora  un account? {'\n'} Registrati subito!
                    </Text>

                    <View style={[GeneralRegister]} >
                        <Pressable onPress={() => goToRegistration()}>
                            <Text style={[GeneralSumbitText]}>Registrati</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </PokeLayout>
    );

};

export { LoginScreen };
