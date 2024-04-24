import React, { ReactNode } from 'react';

import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { IMAGElogo } from 'src/images';
import {
    ORANGE,
    PURPLE,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const PokeLayoutStyle = StyleSheet.create({
    scrollView: { flex: 1, backgroundColor: ORANGE },
    scrollContainerStyle: { flexGrow: 1 },
    bodyView: {
        flex: 2, top: 10, backgroundColor: PURPLE,

        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
    },
    screenLogo: {
        flex: 1,
        width: undefined,
        height: '100%',
        aspectRatio: 1,
    },
});
interface PokeLayoutProp {
    textHeader?: string | null,
    logo?: any,
    children: ReactNode
}
const PokeLayout = ({
    textHeader = null,
    children,
    logo = IMAGElogo,
}: PokeLayoutProp) => {

    return (
        <ScrollView style={[PokeLayoutStyle.scrollView]}
            contentContainerStyle={PokeLayoutStyle.scrollContainerStyle}>
            <View style={[
                tw`h-52 flex items-center p-2 mt-10`]}>
                {
                    !textHeader ? <Image
                        style={[PokeLayoutStyle.screenLogo]}
                        source={logo} /> : <Text>{textHeader}</Text>
                }
            </View>
            <View style={[PokeLayoutStyle.bodyView]}>
                {children}
            </View>
        </ScrollView>
    );
};
export { PokeLayout };
