import React from 'react';

import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    PokeLayout,
} from 'src/components';

import {
    IMAGENfc,
} from 'src/images';
import {
    BLACK,
    WHITE,
    YELLOW,
} from 'src/utils';
import tw from 'twrnc';

const ExchangeScreenStyle = StyleSheet.create(
    {
        navButton: {
            borderRadius: 100,
            backgroundColor: YELLOW,
            paddingTop: 20,
            paddingBottom: 20,
            padding: 5,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconButton: {
            flex: 1,
            width: 70,
            height: '100%',
            aspectRatio: 1,
        },
        containerButton: {
            padding: 10,
        },
        title: {
            color: WHITE,
            textAlign: 'left',
            fontSize: 30,
            fontWeight: '700',
        },
        subTitle: {
            color: WHITE,
            textAlign: 'left',
            fontSize: 25,
            fontWeight: '400',
        },
        textBtn: {
            marginTop: 20,
            fontSize: 10,
            color: BLACK,
            textAlign: 'center',
            fontWeight: '700',
        },
        imagenfc: {
            flex: 1,
            width: 70,
            height: '100%',
            aspectRatio: 1,
        },
    },
);

const ExchangeScreen = ({ }) => {


    return (
        <PokeLayout>
            <View style={[tw`mx-10 flex flex-col gap-2 pb-20`]}>
                <Text style={[tw`mt-10`, ExchangeScreenStyle.title]}>Ricezione del tokent</Text>
                <Text style={[tw``, ExchangeScreenStyle.subTitle]}>In caso di negozio fisico avvicina il tuo telefono a quello del venditore</Text>
                <Text style={[tw``, ExchangeScreenStyle.subTitle]}>In caso di negozio online ricorda di fare l'acquisto con la stessa mail associata all'account</Text>
                <View style={[tw`flex flex-col gap-1`]}>
                    <Image
                        style={[ExchangeScreenStyle.imagenfc, tw`flex border-solid border-2 rounded-full`]}
                        source={IMAGENfc} />

                </View>
            </View>
        </PokeLayout>
    );

};

export { ExchangeScreen };
