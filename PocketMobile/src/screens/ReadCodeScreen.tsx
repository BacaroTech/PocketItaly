import React, {
  useCallback,
  useRef,
  useState,
} from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PressableOpacity } from 'react-native-pressable-opacity';
import { createIconSet } from 'react-native-vector-icons';
import {
  Camera,
  Code,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import { PokeLayout } from 'src/components';
import { usePocketNavigation } from 'src/core';
import { useIsForeground } from 'src/hooks';
import { glyphMap } from 'src/icons';
import { IMAGEcode } from 'src/images';
import {
  BLACK,
  CAPTURE_BUTTON_SIZE,
  CONTENT_SPACING,
  CONTROL_BUTTON_SIZE,
  GeneralStyle,
  SAFE_AREA_PADDING,
  YELLOW,
} from 'src/utils';
import tw from 'twrnc';

import { useIsFocused } from '@react-navigation/native';

const IonIcon = createIconSet(glyphMap, 'Ionicons', 'Ionicons.ttf');

const BORDER_WIDTH = CAPTURE_BUTTON_SIZE * 0.1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        // height: SCREEN_HEIGHT
    },
    button: {
        marginBottom: CONTENT_SPACING,
        width: CONTROL_BUTTON_SIZE,
        height: CONTROL_BUTTON_SIZE,
        borderRadius: CONTROL_BUTTON_SIZE / 2,
        backgroundColor: 'rgba(140, 140, 140, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButtonRow: {
        position: 'absolute',
        right: SAFE_AREA_PADDING.paddingRight,
        top: SAFE_AREA_PADDING.paddingTop,
    },
    backButton: {
        position: 'absolute',
        left: SAFE_AREA_PADDING.paddingLeft,
        top: SAFE_AREA_PADDING.paddingTop,
    },
    // enterButton: {
    //     position: 'absolute',
    //     width: 100,
    //     height: 100,
    //     margin: SAFE_AREA_PADDING.paddingLeft,
    //     bottom: SAFE_AREA_PADDING.paddingTop,
    // },
    codeRead: {
        padding: 10,
        margin: 5,
        borderColor: YELLOW,
        backgroundColor: BLACK,
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    codeReadEnter: {
        backgroundColor: YELLOW,
        color: BLACK,
        borderColor: YELLOW,
        borderRadius: 50,
        borderWidth: 1,
        borderStyle: 'solid',
    },
    flex: {
        flex: 1,
    },
    shadow: {
        width: CAPTURE_BUTTON_SIZE,
        height: CAPTURE_BUTTON_SIZE,
        borderRadius: CAPTURE_BUTTON_SIZE / 2,
        backgroundColor: YELLOW,
    },
    buttonCapture: {
        width: CAPTURE_BUTTON_SIZE,
        height: CAPTURE_BUTTON_SIZE,
        borderRadius: CAPTURE_BUTTON_SIZE / 2,
        borderWidth: BORDER_WIDTH,
        borderColor: 'white',
    },
    contentButton: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: SAFE_AREA_PADDING.paddingBottom,
    },
});
const PermissionsPage = () => {
    return (
        <PokeLayout logo={IMAGEcode}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Leggi Codice</Text>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Richiesta permesso</Text>

        </PokeLayout>
    );
};
const NoCameraDeviceError = () => {
    return (
        <PokeLayout logo={IMAGEcode}>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>Leggi Codice</Text>
            <Text style={[tw`text-center text-xl mb-10 `, GeneralStyle.title]}>NoCameraDeviceError</Text>

        </PokeLayout>
    );
};
const ReadCodeScreen = ({ }) => {
    const navigation = usePocketNavigation();
    // 1. Use a simple default back camera
    const device = useCameraDevice('back');

    // 2. Only activate Camera when the app is focused and this screen is currently opened
    const isFocused = useIsFocused();
    const isForeground = useIsForeground();
    const isActive = isFocused && isForeground;

    // 3. (Optional) enable a torch setting
    const [torch, setTorch] = useState(false);
    const [codeRead, setCodeRead] = useState<string | null>(null);

    // 4. On code scanned, we show an aler to the user
    const isShowingAlert = useRef(false);
    const onCodeScanned = useCallback((codes: Code[]) => {
        console.log(`Scanned ${codes.length} codes:`, codes);
        const value = codes[0]?.value;
        if (value == null) { return; }
        if (isShowingAlert.current) { return; }
        setCodeRead(value);
        // showCodeAlert(value, () => {
        //     isShowingAlert.current = false;
        // });
        // isShowingAlert.current = true;
    }, []);
    const enterCode = () => {
        if (codeRead) {
            console.log("Inserisci ")
            navigation.navigate('CodeAnalysis', { codeRead: codeRead, name: 'CodeAnalysis' });
        }
    };
    // 5. Initialize the Code Scanner to scan QR codes and Barcodes
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: onCodeScanned,
    });

    const { hasPermission } = useCameraPermission();

    if (!hasPermission) { return <PermissionsPage />; }
    if (device == null) { return <NoCameraDeviceError />; }

    return (
        <View style={styles.container}>
            {device != null && (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={isActive}
                    codeScanner={codeScanner}
                    torch={torch ? 'on' : 'off'}
                    enableZoomGesture={true}
                />
            )}

            {/* <StatusBarBlurBackground /> */}

            <View style={styles.rightButtonRow}>
                <PressableOpacity style={styles.button} onPress={() => setTorch(!torch)} disabledOpacity={0.4}>
                    <IonIcon name={torch ? 'flash' : 'flash-off'} color="white" size={24} />
                </PressableOpacity>
            </View>

            {/* Back Button */}
            <View style={styles.backButton}>
                <View style={styles.codeRead}>
                    <Text>{codeRead || 'Inquadra un codice o un QR'}</Text>
                </View>
            </View>
            {codeRead &&
                <PressableOpacity style={styles.contentButton} onPress={() => enterCode()}>
                    <View style={styles.shadow}>
                        <View style={styles.buttonCapture} />
                    </View>
                </PressableOpacity>
            }

        </View>

    );

};

export { ReadCodeScreen };
