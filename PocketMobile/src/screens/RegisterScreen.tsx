import React from 'react';

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
  WHITE,
  YELLOW,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const RegisterStyle = StyleSheet.create({
    secondContainer: {
        backgroundColor: YELLOW,
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
    },
    link: {
        marginTop: 10,
        color: ORANGE,
        fontSize: 18,
        textAlign: 'left',
        marginBottom: 10,
        fontFamily: FontFamilyName,
    },
});
const RegisterScreen = ({ }) => {
    const navigation = usePocketNavigation();

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const registerFunction = () => {
        navigation.navigate('Home');
    }
    return (
        <ScrollView style={[tw`h-full`, GeneralStyle.container]}>
            <View style={[tw`h-full`, GeneralStyle.container]}>
                <Image
                    style={tw`m-auto mt-10 mb-5`}
                    source={IMAGElogo} />
                <Text style={[tw`text-center text-8xl mb-10 `, GeneralStyle.title]}>Registrazione</Text>
                <View style={[tw`pb-26`, RegisterStyle.secondContainer]}>
                <SafeAreaView style={tw`mx-10 mt-10 mb-5`}>
                <TextInput
                        style={[GeneralStyle.input]}
                        onChangeText={valueUpdated => setName(valueUpdated)}
                        placeholder="Nome"
                        placeholderTextColor={WHITE}
                        defaultValue={name}
                    />
                    <TextInput
                        style={[GeneralStyle.input]}
                        onChangeText={valueUpdated => setPhone(valueUpdated)}
                        placeholder="Telefono"
                        placeholderTextColor={WHITE}
                        defaultValue={phone}
                    />
                    <TextInput
                        style={[GeneralStyle.input]}
                        onChangeText={valueUpdated => setEmail(valueUpdated)}
                        placeholder="Email"
                        placeholderTextColor={WHITE}
                        keyboardType="email-address"
                        defaultValue={email}
                    />
                    <TextInput
                        style={[GeneralStyle.input,]}
                        onChangeText={valueUpdated => setPassword(valueUpdated)}
                        placeholder="Password"
                        placeholderTextColor={WHITE}
                        secureTextEntry={true}
                        defaultValue={password}
                    />
                                        <View
                        style={[tw`mt-5`, GeneralStyle.submit, GeneralStyle.submitOrange]}
                    ><Pressable
                        onPress={() => registerFunction()}>
                            <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.yellow]}>Registrati</Text>
                        </Pressable>
                    </View>
                </SafeAreaView>
                </View>
            </View>
        </ScrollView>
    );

};

export { RegisterScreen };
