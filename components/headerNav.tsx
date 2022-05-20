import { Button, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { base } from '../Styles/index';
import rootDrawer from '../types/rootDrawer';

export default function HeaderNav({ navigation, isLoggedIn } : rootDrawer) {
    return (
        <View style={base.styles.headerNav}>
            {
                isLoggedIn ?
                    <Ionicons
                    style={base.styles.headerIcon} name="heart-outline" size={28}
                    onPress={() => navigation.navigate('Favoriter')}
                    /> :
                    <Ionicons
                    style={base.styles.headerIcon} name="heart-outline" size={28}
                    onPress={() => navigation.navigate('Logga in')}
                    />
            }

            <Ionicons
                name="alert-circle-outline" size={28}
                onPress={() => navigation.navigate('Meddelanden')}
            />
        </View>
    );
}
