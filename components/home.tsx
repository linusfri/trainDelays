import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as location from 'expo-location';

import MapList from './mapList';
import Details from './details';
import home from '../types/home';
import { styles } from '../Styles/base';

export default function Home({ delays, getDelays } : home) {
    const Stack = createNativeStackNavigator();

    return (
        <View style={styles.container}>
            <Stack.Navigator initialRouteName='Karta'>
                <Stack.Screen name='Karta'>
                    {(screenprops) =>
                        <MapList {...screenprops} delays={delays} getDelays={getDelays} />
                    }
                </Stack.Screen>
                <Stack.Screen name='Detaljer' component={Details} />
            </Stack.Navigator>
        </View>
    );
}
