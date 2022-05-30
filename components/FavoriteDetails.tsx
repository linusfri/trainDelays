import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import { base, typo } from '../Styles/index';
import trainModel from '../models/trainModel';
import favoriteStackRoute from '../types/favoriteStackRoute';
import DelayBoxFav from './DelayBoxFav';

export default function FavoriteDetails({ route } : favoriteStackRoute) {
    const {station, delays} = route.params;

    let delaysPerStation = trainModel.getDelaysSingleStation(station.LocationSignature, delays);

    delaysPerStation = trainModel.sortDelaysByTo(delaysPerStation);

    const delaysToRender = delaysPerStation.map((delay, index) => {
        const fromDate = new Date(delay.AdvertisedTimeAtLocation).toLocaleTimeString();
        const lateFromDate = new Date(delay.EstimatedTimeAtLocation).toLocaleTimeString();
        const from = delay.FromLocation[0].AdvertisedLocationName;
        const to = delay.ToLocation[0].AdvertisedLocationName;

        return (
            <DelayBoxFav
                key={index}
                fromDate={fromDate}
                lateFromDate={lateFromDate}
                from={from}
                to={to}
                delay={delay}
            />
        );
    });

    return (
        <ScrollView>
            {
                (delaysToRender.length) ? delaysToRender :
                <View style={base.styles.homeTextPlaceholder}>
                    <Text style={typo.styles.stationBoxText}>
                        Det finns inga förseningar för {station.AdvertisedLocationName}
                    </Text>
                </View>
            }
        </ScrollView>
    );
}
