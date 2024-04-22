import React from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { IMAGEprofile } from 'src/images';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const ProfileScreen = ({ }) => {

    return (
        <PokeLayout logo={IMAGEprofile}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Profilo</Text>
        </PokeLayout>
    );

};

export { ProfileScreen };
