import React, { useState } from 'react';

import {
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
import { PokeLayout } from 'src/components';
import { IMAGEcode } from 'src/images';
import {
  ORANGE,
  PURPLE,
} from 'src/utils';
import GeneralStyle from 'src/utils/GeneralStyle';
import tw from 'twrnc';

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
    const [codeScanned, setCodeScanned] = useState<string | null | undefined>(null);
    const [codes, setCodes] = useState<Code[]>([]);
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Scanned ${codes.length} codes!`)
            if (codes.length) {

                setCodeScanned(codes[0].value)


                console.log(`Code ${codes[0].value}`)
            }
        }
    })
    const device = useCameraDevice('back');
    const { hasPermission } = useCameraPermission();

    if (!hasPermission) { return <PermissionsPage />; }
    if (device == null) { return <NoCameraDeviceError />; }

    return (
        <ScrollView style={[CameraLayoutStyle.scrollView]}
            contentContainerStyle={CameraLayoutStyle.scrollContainerStyle}>
            <View style={[
                tw`h-52 flex items-center p-2 mt-10`]}>
                <Text>Lettura Codice</Text>
                <Text>Numero Codici letti:{codes.length}</Text>
                {codeScanned ? <Text>{codeScanned}</Text> : <Text>Nessun codice letto</Text>}
            </View>
            <View style={[CameraLayoutStyle.bodyView]}>
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                    codeScanner={codeScanner}
                />
            </View>
        </ScrollView>

    );

};

export { ReadCodeScreen };
