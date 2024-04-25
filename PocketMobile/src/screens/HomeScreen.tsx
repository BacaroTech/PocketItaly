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
} from 'src/utils';
import tw from 'twrnc';

const HomeStyle = StyleSheet.create(
    {
        navButton: {
            borderRadius: 100,
            backgroundColor: YELLOW,
            paddingTop: 20,
            paddingBottom: 20,
            padding: 5,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        iconButton: {
            flex: 1,
            width: 70,
            height: '100%',
            aspectRatio: 1,
        },
        containerButton: {
            padding: 10,
        },
        title: {
            color: WHITE,
        },
        textBtn: {
            marginTop: 20,
            fontSize: 10,
            color: BLACK,
            textAlign: 'center',
            fontWeight: '700',
        },
    },
);
type HomeBtnProp = {
    goTo: (dest: IRouteNameList) => void,
    text: string,
    logo: any
}
const HomeBtn = ({ goTo, text, logo }: HomeBtnProp) => {
    return (
        <Block style={[HomeStyle.containerButton]}>
            <Pressable style={[HomeStyle.navButton]} onPress={() => goTo('LinkAnalysis')}>
                <Image
                    style={[HomeStyle.iconButton]}
                    source={logo} />
                <Text style={[HomeStyle.textBtn]}>{text}</Text>
            </Pressable>
        </Block>
    );
};
const HomeScreen = ({ }) => {
    const navigation = usePocketNavigation();

    const goTo = (dest: IRouteNameList) => {
        navigation.navigate(dest);
    };
    return (
        <PokeLayout>
            <View style={[tw`mx-10 my-5`]}>
                <Text style={[tw`text-center text-2xl mb-5 font-extrabold`, HomeStyle.title]}>La mia homepage</Text>
                <Block row>
                    <HomeBtn
                        goTo={() => goTo('LinkAnalysis')}
                        text={'Analisi\nLink'}
                        logo={IMAGElink}
                    />
                    <HomeBtn
                        goTo={() => goTo('CodeAnalysis')}
                        text={'Analisi\nCodice'}
                        logo={IMAGEcode}
                    />
                </Block>
                <Block row>
                    <HomeBtn
                        goTo={() => goTo('PhotoAnalysis')}
                        text={'Analisi\nVisiva'}
                        logo={IMAGEcamera}
                    />
                    <HomeBtn
                        goTo={() => goTo('Profile')}
                        text={'Profilo'}
                        logo={IMAGEprofile}
                    />

                </Block>
                <Block row>
                    <HomeBtn
                        goTo={() => goTo('Report')}
                        text={'Report'}
                        logo={IMAGEreport}
                    />
                    <HomeBtn
                        goTo={() => goTo('Education')}
                        text={'Istruzione'}
                        logo={IMAGEedu}
                    />
                </Block>
            </View>
        </PokeLayout>
    );

};

export { HomeScreen };
