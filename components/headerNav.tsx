import { Button, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { base } from '../Styles/index';
import rootNavigation from '../types/rootNavigation';

export default function HeaderNav({ navigation } : rootNavigation) {
    return (
        <View style={base.styles.headerNav}>
            <Ionicons
                style={base.styles.headerIcon} name="heart-outline" size={28}
                onPress={() => navigation.navigate('Favoriter')}
            />
            <Ionicons
                name="alert-circle-outline" size={28}
                onPress={() => navigation.navigate('Meddelanden')}
            />
        </View>
    );
}
