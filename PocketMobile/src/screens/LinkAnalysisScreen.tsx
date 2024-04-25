import React from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { IMAGElink } from 'src/images';
import { GeneralStyle } from 'src/utils';
import tw from 'twrnc';

const LinkAnalysisScreen = ({ }) => {

    return (
        <PokeLayout logo={IMAGElink}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Analisi Link</Text>
        </PokeLayout>
    );

};

export { LinkAnalysisScreen };
