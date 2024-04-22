import React, { useState } from 'react';

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SIGN_IN_KEY } from 'src/config';
import { useCurrentStore } from 'src/context';
import { usePocketNavigation } from 'src/core';
import { IRouteNameList } from 'src/core/navigation.interface';
import { FontFamilyName } from 'src/utils/GeneralStyle';
import {
  GREEN,
  YELLOW,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const OpenMenuStyle = StyleSheet.create({
    containerYellow: {
        backgroundColor: YELLOW,
    },
    textGreen: {
        color: GREEN,
        fontFamily: FontFamilyName,
    },
});
type MenuItem = {
    label: string,
    nav: IRouteNameList | 'Logout'
}
const menu: MenuItem[] = [
    {
        label: 'Home',
        nav: 'Home',
    }, {
        label: 'LinkAnalysis',
        nav: 'LinkAnalysis',
    }, {
        label: 'CodeAnalysis',
        nav: 'CodeAnalysis',
    }, {
        label: 'PhotoAnalysis',
        nav: 'PhotoAnalysis',
    }, {
        label: 'Profilo',
        nav: 'Profile',
    },
    {
        label: 'Report',
        nav: 'Report',
    }, {
        label: 'Istruzione',
        nav: 'Education',
    },
    {
        label: 'Logout',
        nav: 'Logout',
    },
];


const MenuScreen = () => {
    const navigation = usePocketNavigation();
    const { storage } = useCurrentStore();

    const [menuView] = useState<MenuItem[]>(menu);

    const goSection = (menuItem: any) => {
        if (menuItem.nav === 'Logout') {
            storage.clearMapForKey(SIGN_IN_KEY)
                .then(_ => {

                    navigation.navigate('Login');
                }).catch(_ => {

                    navigation.navigate('Login');
                });
        } else {
            navigation.navigate(menuItem.nav);
        }
    };

    return (
        <ScrollView style={[tw`h-full`, OpenMenuStyle.containerYellow]}>
            <View style={[tw`px-10`]}>
                {menuView.map((menuItem) => {
                    return (
                        <Pressable onPress={() => goSection(menuItem)}>
                            <Text key={menuItem.label} style={[tw`text-4xl mb-5`, OpenMenuStyle.textGreen]}>
                                {menuItem.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </View>
        </ScrollView>
    );
};

export { MenuScreen };
