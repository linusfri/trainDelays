import { Button, View, TouchableOpacity } from 'react-native';
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
                    style={base.styles.headerIconLeft} name="heart" size={26}
                    onPress={() => navigation.navigate('Favoriter')}
                    /> :
                    <Ionicons
                    style={base.styles.headerIconLeft} name="heart" size={26}
                    onPress={() => navigation.navigate('Logga in')}
                    />
            }

            <Ionicons
                style={base.styles.headerIconRight}
                name="alert-circle" size={26}
                onPress={() => navigation.navigate('Meddelanden')}
            />
        </View>
    );
}
