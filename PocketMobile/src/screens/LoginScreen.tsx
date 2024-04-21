import React, { useState } from 'react';

import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { usePocketNavigation } from 'src/core';
import { IMAGElogo } from 'src/images';
import GeneralStyle, { FontFamilyName } from 'src/utils/GeneralStyle';
import {
  ORANGE,
  WHITE,
  YELLOW,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const LoginStyle = StyleSheet.create({
    secondContainer: {
        backgroundColor: YELLOW,
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
        color: ORANGE,
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
        <ScrollView style={[tw`h-full`, GeneralStyle.container]}>
            <View style={[tw`h-full`, GeneralStyle.container]}>
                <Image
                    style={tw`m-auto mt-10 mb-5`}
                    source={IMAGElogo} />
                <Text style={[tw`text-center text-8xl mb-10 `, GeneralStyle.title]}>Login</Text>
                <View style={[tw`h-full mb-30`, LoginStyle.secondContainer]}
                >
                    <SafeAreaView style={tw`mx-10 mt-10 mb-5`}>
                    <TextInput
                            style={[GeneralStyle.input]}
                            placeholder="Email"
                            keyboardType="email-address"
                            placeholderTextColor={WHITE} 
                            onChangeText={valueUpdated => setEmail(valueUpdated)}
                            defaultValue={email}
                        />
                        <TextInput
                            style={[GeneralStyle.input]}
                            placeholder="Password"
                            placeholderTextColor={WHITE} 
                            onChangeText={valueUpdated => setPassword(valueUpdated)}
                            defaultValue={password}
                            secureTextEntry={true}
                        />
                                                <View style={[tw`mt-5`, GeneralStyle.submit, GeneralStyle.submitOrange]} >
                            <Pressable onPress={() => login()}>
                                <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.yellow]}>Login</Text>
                            </Pressable>
                        </View>
                        <Pressable onPress={() => goToRegistration()}>
                            <Text style={[LoginStyle.account]}>
                                Non hai un account? {'\n'} Creane uno al volo!
                            </Text>
                        </Pressable>
                    </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    );

};

export { LoginScreen };
