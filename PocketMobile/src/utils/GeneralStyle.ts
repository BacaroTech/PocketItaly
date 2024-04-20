import { StyleSheet } from 'react-native';

import {
  GREEN,
  ORANGE,
  WHITE,
  YELLOW,
} from './pocket-palete';

export const FontFamilyName = 'IrishGrover-Regular';

const GeneralStyle = StyleSheet.create({
    container: {
        backgroundColor: GREEN,
    },
    title: {
        color: ORANGE,
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
    input: {
        height: 40,
        marginTop: 20,
        borderRadius: 15,
        padding: 5,
        fontSize: 25,
        paddingLeft: 20,
        color: WHITE,
        backgroundColor: GREEN,
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
});

export default GeneralStyle;
export { GeneralStyle };
