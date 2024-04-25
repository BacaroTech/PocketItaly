import React, {
  useEffect,
  useState,
} from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PokeLayout } from 'src/components';
import { IMAGEShop1 } from 'src/images';
import {
  DARK_RED,
  GeneralSumbitText,
  LIGHT_GREEN,
  RED,
  WHITE,
  YELLOW,
} from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

type ItemResultProperty = {
    verified?: boolean,
    text: string,
}
const ItemResult = ({ verified, text }: ItemResultProperty) => {
    const blockStyle = StyleSheet.flatten({
        backgroundColor: verified ? LIGHT_GREEN : RED,
        padding: 1,
    });
    return (
        <View style={[tw`flex flex-row gap-1`]}>
            <View style={[blockStyle, tw`w-5 h-5 rounded-full`]} />

            <Text style={[{ color: WHITE }]}>{text}</Text>
        </View>
    );
};

const positiveResult = 'Il prodotto è un prodotto made in italy';
const negativeResult = 'Il prodotto non è un prodotto made in italy';
type Shop = {
    address: string;
    image?: any;
}

type ResultItem = {
    text: string;
    verified: boolean;
}

const showFakeList: Shop[] = [
    {
        address: 'Colors of Benetton via rossi 12 castelfranco veneto TV',
        image: IMAGEShop1,
    },
];


const fakeResultPositiveList: ResultItem[] = [
    { text: 'Match banca dati', verified: true },
    { text: 'Produttore', verified: true },
    { text: 'Tracciabilità', verified: true },
];
const fakeResultNegativeList: ResultItem[] = [
    { text: 'Match banca dati', verified: false },
    { text: 'Produttore', verified: false },
    { text: 'Tracciabilità', verified: false },
];
const ResultAnalysisStyle = StyleSheet.create({
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
    submitOK: {
        backgroundColor: YELLOW,
        alignSelf: 'center',
    },
    submitDenied: {
        backgroundColor: DARK_RED,
        alignSelf: 'center',
    },
    submitDeniedText: {
        color: WHITE,
    },
    imageShop: {
        height: 150,
        borderColor: YELLOW,
        width: '100%',
        resizeMode: 'cover',
    },
});

export const ResultAnalysisScreen = (): React.JSX.Element => {
    const isFocused = useIsFocused();
    const [text, setText] = useState('');
    const [globalResult, setGlobalResult] = useState<boolean>(false);
    const [resultItems, setResut] = useState<ResultItem[]>([]);
    const [shopList] = useState<Shop[]>(showFakeList);

    useEffect(() => {
        setText(positiveResult);
        const x = true;//(Math.floor(Math.random() * 2) === 0);
        setGlobalResult(x);
        if (x) {
            setText(positiveResult);
            setResut(fakeResultPositiveList);
        } else {
            setText(negativeResult);
            setResut(fakeResultNegativeList);
        }

    }, [isFocused]);

    const goToExchange = () => {

    };

    return (
        <PokeLayout textHeader={text}>
            <View style={[tw`mx-10 flex flex-col gap-2 pb-20`]}>
                <Text style={[tw`mt-10`, ResultAnalysisStyle.title]}>Resoconto Report</Text>
                <Text style={[tw``, ResultAnalysisStyle.subTitle]}>Il punteggio del report è stato calcolato in base a diversi parametri</Text>

                <View style={[tw`ml-5 flex flex-col gap-2`]}>
                    {resultItems.map(item => (<ItemResult {...item} />))}

                </View>

                {globalResult ? <></> : <View style={[tw`ml-5 flex flex-col gap-2`]}>
                    <Text style={[tw``, ResultAnalysisStyle.subTitle]}>Altri negozi dove puoi trovare questo prodotto ma originale:</Text>
                    {shopList.map(shop => (<>
                        <View style={[tw`flex flex-col gap-1`]}>
                            <Image
                                style={[ResultAnalysisStyle.imageShop, tw`flex border-solid border-2 rounded-full`]}
                                source={shop.image} />

                            <Text>{shop.address}</Text>
                        </View>
                    </>))}
                </View>}
                {globalResult ?
                    <View style={[tw`px-10 py-1 rounded-full`, ResultAnalysisStyle.submitOK]} >
                        <Pressable onPress={() => goToExchange()}>
                            <Text style={[GeneralSumbitText]}>Acquista</Text>
                        </Pressable>
                    </View> :
                    <View style={[tw`px-10 py-1 rounded-full`, ResultAnalysisStyle.submitDenied]} >
                        <Text style={[tw`text-center text-2xl`, ResultAnalysisStyle.submitDeniedText]}>Acquista</Text>
                    </View>}
            </View>
        </PokeLayout>
    );
};

