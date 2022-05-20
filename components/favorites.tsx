import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';

import { base } from '../Styles/index';
import authModel from '../models/authModel';
import favorites from '../types/screens/favorites';
import storageModel from '../models/storageModel';

export default function Favorites({ navigation, isUserLoggedIn } : favorites) {
    async function logout() {
        authModel.logout();
        isUserLoggedIn();
    }

    return (
        <View>
            <TouchableOpacity
                style={base.styles.button}
                onPress={() => {
                    logout();
                }}
            >
                <Text>Logga ut</Text>
            </TouchableOpacity>
            <Text>Hej</Text>
        </View>
    );
}
