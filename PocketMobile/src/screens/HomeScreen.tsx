import React from 'react';

import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Block,
  PokeLayout,
} from 'src/components';
import { usePocketNavigation } from 'src/core';
import { IRouteNameList } from 'src/core/navigation.interface';
import {
  IMAGEcamera,
  IMAGEcode,
  IMAGEedu,
  IMAGElink,
  IMAGEprofile,
  IMAGEreport,
} from 'src/images';
import {
  BLACK,
  WHITE,
  YELLOW,
} from 'src/utils/pocket-palete';
import tw from 'twrnc';

const HomeStyle = StyleSheet.create(
    {
        navButton: {
            borderRadius: 100,
            backgroundColor: YELLOW,
            padding: 0
        },
        iconButton: {
            flex: 1,
            width: undefined,
            height: '100%',
            aspectRatio: 1,
        },
        containerButton: {
            padding: 20,
        },
        title: {
            color: WHITE,
        },
        textBtn: {
            fontSize: 20,
            color: BLACK,
        }
    },
);
const HomeScreen = ({ }) => {
    const navigation = usePocketNavigation();

    const goTo = (dest: IRouteNameList) => {
        navigation.navigate(dest);
    };
    return (
        <PokeLayout>
            <View style={[tw`mx-10 my-5`]}>
                <Text style={[tw`text-center text-xl mb-5`, HomeStyle.title]}>La mia homepage</Text>
                <Block row>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable onPress={() => goTo('LinkAnalysis')}>
                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGElink} />
                            </Pressable>
                        </View>
                    </Block>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable onPress={() => goTo('CodeAnalysis')}>

                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGEcode} />

                            </Pressable>
                        </View>
                    </Block>
                </Block>
                <Block row>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable onPress={() => goTo('PhotoAnalysis')}>

                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGEcamera} />

                            </Pressable>
                        </View>
                    </Block>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable style={[tw``]} onPress={() => goTo('Profile')}>

                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGEprofile} />

                            </Pressable>
                        </View>
                    </Block>
                </Block>
                <Block row>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable onPress={() => goTo('Report')}>

                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGEreport} />
                            </Pressable>
                        </View>
                    </Block>
                    <Block style={[HomeStyle.containerButton]}>
                        <View style={[HomeStyle.navButton]} >
                            <Pressable style={[tw``]} onPress={() => goTo('Education')}>
                                <Image
                                    style={[HomeStyle.iconButton]}
                                    source={IMAGEedu} />
                            </Pressable>
                        </View>
                    </Block>
                </Block>
            </View>
        </PokeLayout>
    );

};

export { HomeScreen };
