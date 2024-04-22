import React from 'react';

import { Text } from 'react-native';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import { IRouteNameList } from 'src/core/navigation.interface';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

const LinkAnalysisScreen = ({ }) => {
    const navigation = usePocketNavigation();

    const goTo = (dest: IRouteNameList) => {
        navigation.navigate(dest);
    };
    return (
        <PokeLayout>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Analisi Link</Text>
        </PokeLayout>
    );

};

export { LinkAnalysisScreen };
