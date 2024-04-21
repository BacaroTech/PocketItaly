import { StyleSheet } from 'react-native';

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
        height: 40,
        marginTop: 20,
        borderRadius: 15,
        padding: 5,
        fontSize: 25,
        paddingLeft: 20,
        color: PURPLE,
        backgroundColor: WHITE,
        fontFamily: FontFamilyName,
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
    submit: {
        backgroundColor: YELLOW,
        color: ORANGE,
        margin: 10,
        height: 40,
        borderRadius: 15,
        fontSize: 20,
    },
    submitRegistration: {
        backgroundColor: WHITE,
        color: PURPLE,
        margin: 10,
        height: 40,
        borderRadius: 15,
        fontSize: 20,
    },
    submitOrange: {
        backgroundColor: ORANGE,
        color: YELLOW,
        margin: 10,
        height: 40,
        borderRadius: 15,
        fontSize: 20,
        fontFamily: FontFamilyName,
    },
    submitYellow: {
        backgroundColor: YELLOW,
    },
    splashContainer: {

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

export default GeneralStyle;
export { GeneralStyle };
