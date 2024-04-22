import React from 'react';

import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import GeneralStyle from 'src/utils/GeneralStyle';
import { PURPLE } from 'src/utils/pocket-palete';
import tw from 'twrnc';

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
        <PokeLayout>
            <SafeAreaView style={tw`mx-10 mt-10 mb-5`}>
                <TextInput
                    style={[GeneralStyle.input]}
                    onChangeText={valueUpdated => setName(valueUpdated)}
                    placeholder="Nome"
                    placeholderTextColor={PURPLE}
                    defaultValue={name}
                />
                <TextInput
                    style={[GeneralStyle.input]}
                    onChangeText={valueUpdated => setPhone(valueUpdated)}
                    placeholder="Telefono"
                    placeholderTextColor={PURPLE}
                    defaultValue={phone}
                />
                <TextInput
                    style={[GeneralStyle.input]}
                    onChangeText={valueUpdated => setEmail(valueUpdated)}
                    placeholder="Email"
                    placeholderTextColor={PURPLE}
                    keyboardType="email-address"
                    defaultValue={email}
                />
                <TextInput
                    style={[GeneralStyle.input,]}
                    onChangeText={valueUpdated => setPassword(valueUpdated)}
                    placeholder="Password"
                    placeholderTextColor={PURPLE}
                    secureTextEntry={true}
                    defaultValue={password}
                />
                <View
                    style={[tw`mt-5`, GeneralStyle.submit, GeneralStyle.submitYellow]}
                ><Pressable
                    onPress={() => registerFunction()}>
                        <Text style={[tw`text-center mt-1 text-xl`, GeneralStyle.black]}>Registrati</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </PokeLayout>
    );

};

export { RegisterScreen };
