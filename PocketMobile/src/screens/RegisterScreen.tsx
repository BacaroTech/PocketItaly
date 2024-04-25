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
import {
  GeneralInput,
  GeneralSubmit,
  GeneralSumbitText,
  PURPLE,
} from 'src/utils';
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
            <SafeAreaView style={tw`mx-10 mt-10 mb-5 flex flex-col gap-5`}>
                <TextInput
                    style={[GeneralInput]}
                    onChangeText={valueUpdated => setName(valueUpdated)}
                    placeholder="Nome"
                    placeholderTextColor={PURPLE}
                    defaultValue={name}
                />
                <TextInput
                    style={[GeneralInput]}
                    onChangeText={valueUpdated => setPhone(valueUpdated)}
                    placeholder="Telefono"
                    placeholderTextColor={PURPLE}
                    defaultValue={phone}
                />
                <TextInput
                    style={[GeneralInput]}
                    onChangeText={valueUpdated => setEmail(valueUpdated)}
                    placeholder="Email"
                    placeholderTextColor={PURPLE}
                    keyboardType="email-address"
                    defaultValue={email}
                />
                <TextInput
                    style={[GeneralInput]}
                    onChangeText={valueUpdated => setPassword(valueUpdated)}
                    placeholder="Password"
                    placeholderTextColor={PURPLE}
                    secureTextEntry={true}
                    defaultValue={password}
                />
                <View
                    style={[GeneralSubmit]}
                ><Pressable
                    onPress={() => registerFunction()}>
                        <Text style={[GeneralSumbitText]}>Registrati</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </PokeLayout>
    );

};

export { RegisterScreen };
