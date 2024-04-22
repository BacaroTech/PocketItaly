import React from 'react';

import {
  Text,
  View,
} from 'react-native';
import GeneralStyle from 'src/utils/GeneralStyle';
import {
  BLACK,
  ORANGE,
  PURPLE,
} from 'src/utils/pocket-palete';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={[{ flex: 1 }, GeneralStyle.container]}>
      <View style={[{ flex: 1,  backgroundColor: ORANGE  }]}>
        <Text style={{ color: BLACK }} >CIAO</Text>
      </View>
      <View style={[{ flex: 2, top: 2, backgroundColor: PURPLE }]}>
      <Text style={{ color: BLACK }} >CIAO</Text>
      </View>
    </View>
  );
};

export { FlexDimensionsBasics };
