import React, {
  useEffect,
  useState,
} from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { GeneralStyle } from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

const positiveResult = 'Il prodotto è un prodotto originale';
const negativeResult = 'Il prodotto non è un prodotto originale';
export const ResultAnalysisScreen = (): React.JSX.Element => {
    const isFocused = useIsFocused();
    const [text, setText] = useState('');
    useEffect(() => {
        const x = (Math.floor(Math.random() * 2) === 0);
        if (x) {
            setText(positiveResult);
        } else {
            setText(negativeResult);
        }

    }, [isFocused]);

    return (
        <PokeLayout textHeader={text}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Resoconto Report</Text>
        </PokeLayout>
    );
};

