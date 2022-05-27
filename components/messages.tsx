import { View, Text } from 'react-native';
import React from 'react';

import { base, typo } from '../Styles/index';
import rootDrawer from '../types/rootDrawer';

export default function Messages() {
    return (
        <View style={base.styles.container}>
            <Text style={typo.styles.delayBoxPBold}>Meddelanden</Text>
        </View>
    );
}
