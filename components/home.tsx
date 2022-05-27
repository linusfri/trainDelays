import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as location from 'expo-location';

import MapList from './MapList';
import Details from './Details';
import home from '../types/screens/home';
import { base } from '../Styles/index';

export default function Home({ delays, getDelays } : home) {
    const Stack = createNativeStackNavigator();

    return (
        <View style={base.styles.container}>
            <Stack.Navigator initialRouteName='Karta'>
                <Stack.Screen name='Karta' options={{
                        ...base.stackHeaderStyle
                }}>
                    {(screenprops) =>
                        <MapList {...screenprops} delays={delays} getDelays={getDelays} />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name='Detaljer'
                    component={Details}
                    options={{...base.stackHeaderStyle}}
                />
            </Stack.Navigator>
        </View>
    );
}
