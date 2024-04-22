import React from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { IMAGEcamera } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const PhotoAnalysisScreen = ({ }) => {

    return (
        <PokeLayout logo={IMAGEcamera}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Analisi Visiva</Text>
        </PokeLayout>
    );

};

export { PhotoAnalysisScreen };
