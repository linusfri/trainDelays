import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { base } from '../Styles/index';
import authModel from '../models/authModel';
import trainModel from '../models/trainModel';
import userModel from '../models/userModel';
import StationPicker from './StationPicker';
import FavoriteDetails from './FavoriteDetails';
import FavoritesList from './FavoritesList';
import IApiDataEntity from '../interfaces/IApiDataEntity';
import station from '../interfaces/Istation';
import favorites from '../types/screens/favoriteList';
import favoritesStackParamList from '../types/favoritesStackParamList';

const Stack = createNativeStackNavigator<favoritesStackParamList>();

export default function Favorites({isLoggedIn, delays, getDelays} : favorites) {
    return (
        <View style={base.styles.container}>
            <Stack.Navigator>
                <Stack.Screen name='Favoritlista'>
                    {(screenProps) =>
                        <FavoritesList
                            isLoggedIn={isLoggedIn}
                            delays={delays}
                            getDelays={getDelays}
                            {...screenProps}
                        />
                    }
                </Stack.Screen>
                <Stack.Screen name='Favoritdetaljer' component={FavoriteDetails}/>
            </Stack.Navigator>
        </View>
    );
}
