import React, { useCallback, useRef, useState } from 'react';

import {
    Alert,
    AlertButton,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Camera,
    Code,
    useCameraDevice,
    useCameraPermission,
    useCodeScanner,
} from 'react-native-vision-camera';
import { PokeLayout, StatusBarBlurBackground } from 'src/components';
import { IMAGEcode } from 'src/images';
import {
    CONTENT_SPACING,
    CONTROL_BUTTON_SIZE,
    ORANGE,
    PURPLE,
    SAFE_AREA_PADDING,
} from 'src/utils';
import { GeneralStyle } from 'src/utils/GeneralStyle';
import { PressableOpacity } from 'react-native-pressable-opacity';
// import IonIcon from '@react-native-vector-icons/ionicons';
import tw from 'twrnc';
import { useIsFocused } from '@react-navigation/native';
import { useIsForeground } from 'src/hooks';
import { usePocketNavigation } from 'src/core';
const showCodeAlert = (value: string, onDismissed: () => void): void => {
    const buttons: AlertButton[] = [
        {
            text: 'Close',
            style: 'cancel',
            onPress: onDismissed,
        },
    ];
    if (value.startsWith('http')) {
        buttons.push({
            text: 'Open URL',
            onPress: () => {
                Linking.openURL(value);
                onDismissed();
            },
        });
    }
    Alert.alert('Scanned Code', value, buttons);
};
const CameraLayoutStyle = StyleSheet.create({
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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

    // 4. On code scanned, we show an aler to the user
    const isShowingAlert = useRef(false);
    const onCodeScanned = useCallback((codes: Code[]) => {
        console.log(`Scanned ${codes.length} codes:`, codes);
        const value = codes[0]?.value;
        if (value == null) { return; }
        if (isShowingAlert.current) { return; }
        showCodeAlert(value, () => {
            isShowingAlert.current = false;
        });
        isShowingAlert.current = true;
    }, []);
    // 5. Initialize the Code Scanner to scan QR codes and Barcodes
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: onCodeScanned,
    });
    // const [codeScanned, setCodeScanned] = useState<string | null | undefined>(null);
    // const [codes, setCodes] = useState<Code[]>([]);
    // const codeScanner = useCodeScanner({
    //     codeTypes: ['qr', 'ean-13'],
    //     onCodeScanned: (codes) => {
    //         console.log(`Scanned ${codes.length} codes!`);
    //         if (codes.length) {

    //             setCodeScanned(codes[0].value);


    //             console.log(`Code ${codes[0].value}`);
    //         }
    //     },
    // });
    // const device = useCameraDevice('back');
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

            <StatusBarBlurBackground />

            <View style={styles.rightButtonRow}>
                <PressableOpacity style={styles.button} onPress={() => setTorch(!torch)} disabledOpacity={0.4}>
                    {/* <IonIcon name={torch ? 'flash' : 'flash-off'} color="white" size={24} /> */}
                    {torch ? <Text>FLASH</Text> : <Text>FLASH OFF</Text>}
                </PressableOpacity>
            </View>

            {/* Back Button */}
            <PressableOpacity style={styles.backButton} onPress={navigation.goBack}>
                {/* <IonIcon name="chevron-back" color="white" size={35} /> */}
                 <Text>BACK</Text>
            </PressableOpacity>
        </View>

    );

};

export { ReadCodeScreen };
