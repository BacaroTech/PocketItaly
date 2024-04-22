import * as React from 'react';

import {
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { usePocketNavigation } from 'src/core';
import { GREEN } from 'src/utils/pocket-palete';
import tw from 'twrnc';

const RightMenu = () => {
    const navigation = usePocketNavigation();

    const goMenu = () => {
        // navigation.navigate('Menu');
    };

    return (
        <Pressable onPress={() => { goMenu(); }}>
            <View style={[tw`p-2`]}>
                <View style={[tw`h-1 w-8`, RightMenuStyle.green]} />
                <View style={[tw`h-1 w-8 my-1`, RightMenuStyle.green]} />
                <View style={[tw`h-1 w-8`, RightMenuStyle.green]} />
            </View>
        </Pressable>
    );
};

const RightMenuStyle = StyleSheet.create({
    green: {
        backgroundColor: GREEN,
    },
});

export { RightMenu };
