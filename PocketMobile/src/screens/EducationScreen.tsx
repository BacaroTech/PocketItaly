import React from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { IMAGEedu } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const EducationScreen = ({ }) => {

    return (
        <PokeLayout logo={IMAGEedu}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Istruzione</Text>
        </PokeLayout>
    );

};

export { EducationScreen };
