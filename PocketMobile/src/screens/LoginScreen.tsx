import React, { useState } from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { usePocketNavigation } from 'src/core';
import { IMAGElogo } from 'src/images';
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
    secondContainer: {
        backgroundColor: PURPLE,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
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
        <ScrollView style={[ GeneralStyle.container]}>

            <View style={[tw`flex flex-col justify-between`]}>
                <View style={[tw`h-42 flex items-center p-2 mt-10`]}>
                    <Image
                        style={[tw``, GeneralStyle.screenLogo]}
                        source={IMAGElogo} />
                </View>
                <View style={[tw`h-content`, LoginStyle.secondContainer]}
                >
                    <SafeAreaView style={[tw` mx-10 mt-10 mb-5 flex flex-col gap-2`]}>
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

                        <View style={[tw`m-1 mb-100`, GeneralStyle.submitRegistration]} >
                            <Pressable onPress={() => goToRegistration()}>
                                <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Registrati</Text>
                            </Pressable>
                        </View>
                    </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    );

};

export { LoginScreen };
