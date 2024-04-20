import React from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { IMAGElogo } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const RegisterScreen = ({ }) => {

    return (
        <ScrollView style={[tw`h-full`, GeneralStyle.container]}>
            <View style={[tw`h-full`, GeneralStyle.container]}>
                <Image
                    style={tw`m-auto mt-10 mb-5`}
                    source={IMAGElogo} />
                <Text style={[tw`text-center text-8xl mb-10 `, GeneralStyle.title]}>Registrazione</Text>
                </View>
        </ScrollView>
    );

};

export { RegisterScreen };
