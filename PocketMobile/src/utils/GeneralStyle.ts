import { StyleSheet } from 'react-native';
import tw from 'twrnc';

import {
  BLACK,
  ORANGE,
  PURPLE,
  WHITE,
  YELLOW,
} from './pocket-palete';

export const FontFamilyName = 'IrishGrover-Regular';

const GeneralStyle = StyleSheet.create({
    container: {
        backgroundColor: ORANGE,
    },
    title: {
        color: BLACK,
        fontFamily: FontFamilyName,
    },
    white: {
        color: WHITE,
        fontFamily: FontFamilyName,
    },
    text: {
        color: WHITE,
        fontFamily: FontFamilyName,
    },
    yellow: {
        color: YELLOW,
        fontFamily: FontFamilyName,
    },
    black: {
        color: BLACK,
        fontFamily: FontFamilyName,
    },
    input: {
        color: PURPLE,
        backgroundColor: WHITE,
        fontFamily: FontFamilyName,
    },
    submit: {
        backgroundColor: YELLOW,
        color: ORANGE,
        alignSelf: 'center',
    },
    submitRegistration: {
        backgroundColor: WHITE,
        color: PURPLE,
        alignSelf: 'center',
    },
    submitTrasparent: {
        borderColor: WHITE,
        borderWidth: 1,
        color: ORANGE,
        margin: 10,
        height: 40,
        borderRadius: 15,
        fontSize: 20,
    },

    submitYellow: {
        backgroundColor: YELLOW,
    },

    splashLogo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    screenLogo: {
        width: undefined,
        height: '100%',
        aspectRatio: 1,
    },
});
const GeneralInput = [tw`pl-5 rounded-full text-2xl`, GeneralStyle.input];
const GeneralSubmit = [tw`px-10 py-1 rounded-full`, GeneralStyle.submit];
const GeneralSumbitText = [tw`text-center text-2xl`, GeneralStyle.black];
const GeneralRegister = [tw`px-10 py-1 rounded-full`, GeneralStyle.submitRegistration];
export {
  GeneralInput,
  GeneralRegister,
  GeneralStyle,
  GeneralSubmit,
  GeneralSumbitText,
};
