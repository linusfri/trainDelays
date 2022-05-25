import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { base, typo } from '../Styles/index';
import authModel from '../models/authModel';
import trainModel from '../models/trainModel';
import userModel from '../models/userModel';
import TimeModel from '../models/timeModel';
import favorites from '../types/screens/favoriteList';
import StationPicker from './StationPicker';
import DelayBox from './DelayBox';
import station from '../interfaces/Istation';
import IApiDataEntity from '../interfaces/IApiDataEntity';
import favoriteStackRoute from '../types/favoriteStackRoute';
import delayBoxFav from '../types/screens/delayBoxFav';

export default function DelayBoxFav({from, to, fromDate, lateFromDate, delay}:delayBoxFav) {
    const delayTimeString = TimeModel.getTimeDelay(fromDate, lateFromDate);

    return (
        <View style={base.styles.delayBox}>
            <Text style={typo.styles.delayBoxText}>
                <Text style={typo.styles.h3}>
                    {from}<Ionicons name={'arrow-forward-outline'} size={18} />{to}
                </Text>
                <Text style={typo.styles.h3}></Text>
                {'\n'}
                <Text>Ursprunglig avgång: {fromDate}</Text>
                {'\n'}
                <Text>Nuvarande avgång: {lateFromDate}</Text>
                {'\n'}
                <Text style={typo.styles.delayBoxPBold}>
                    Försening: {delayTimeString}
                </Text>
                {'\n'}
                <Text>{`Tåg: ${delay.AdvertisedTrainIdent}`}</Text>
                {'\n'}
            </Text>
        </View>
    );
}
