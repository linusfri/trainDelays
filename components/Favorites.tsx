import { View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { base } from '../Styles/index';
import FavoriteDetails from './FavoriteDetails';
import FavoritesList from './FavoritesList';
import favorites from '../types/screens/favoriteList';
import favoritesStackParamList from '../types/favoritesStackParamList';

const Stack = createNativeStackNavigator<favoritesStackParamList>();

export default function Favorites({isLoggedIn, delays, getDelays} : favorites) {
    return (
        <View style={base.styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Favoritlista'
                    options={{...base.stackHeaderStyle}}
                >
                    {(screenProps) =>
                        <FavoritesList
                            isLoggedIn={isLoggedIn}
                            delays={delays}
                            getDelays={getDelays}
                            {...screenProps}
                        />
                    }
                </Stack.Screen>
                <Stack.Screen
                    name='Favoritdetaljer'
                    component={FavoriteDetails}
                    options={{...base.stackHeaderStyle}}
                />
            </Stack.Navigator>
        </View>
    );
}
