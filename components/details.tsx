import { View, Text } from 'react-native';
import React from 'react';

import { base } from '../Styles/index';
import Delay from '../interfaces/delay';
import home from '../types/home';
import stackRoute from '../types/stackRoute';

export default function Details({ route } : stackRoute) {
    const { delay } = route.params || null;

    return (
        <View>
            <Text>{delay.FromLocation[0].LocationName}</Text>
        </View>
    );
}
