import React, { ReactNode } from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

type BlockProperty = {
    style: StyleProp<any>[],
    row: string,
    flex?: number,
    children: ReactNode
}
const Block = ({
    children,
    style,
    flex = 1,
    row,
    ...props
}: BlockProperty) => {
    const blockStyle = StyleSheet.flatten([
        flex !== undefined && { flex },
        row && { flexDirection: 'row'},
        style,
    ]);

    return (
        <View style={blockStyle} {...props}>
            {children}
        </View>
    );
};

export { Block };
