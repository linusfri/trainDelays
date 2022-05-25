import { Text, ScrollView, View } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

import trainModel from '../models/trainModel';
import { base, typo } from '../Styles/index';
import Delay from '../interfaces/Idelay';
import { useState, useEffect } from 'react';
import DelayBox from './DelayBox';
import homeStack from '../types/screens/homeStack';


export default function MapList({navigation, delays, getDelays } : homeStack) {
    const [stationDelays, setStationDelays] = useState<JSX.Element[]>([]);
    const [userMarker, setUserMarker] = useState<JSX.Element>(<></>);

    useEffect(() => {
        getDelays();
        getUserLocation();
    }, []);

    async function getUserLocation() {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status != 'granted') {
            return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});

        setUserMarker(
            <Marker
                coordinate={{
                    latitude: currentLocation.coords.latitude,
                    longitude: currentLocation.coords.longitude
                }}
                title={'Min plats'}
                pinColor={'blue'}
            />
        );
    }

    function getDelaysSingleStation(stationSignature:string) {
        let singleStationDelays = trainModel.getDelaysSingleStation(stationSignature, delays);

        singleStationDelays = trainModel.sortDelaysByTo(singleStationDelays);

        const delaysToRender = singleStationDelays.map((delay, index) => {
            const from = delay.FromLocation[0].AdvertisedLocationName;
            const to = delay.ToLocation[0].AdvertisedLocationName;
            const fromDate = new Date(delay.AdvertisedTimeAtLocation).toLocaleTimeString();
            const lateFromDate = new Date(delay.EstimatedTimeAtLocation).toLocaleTimeString();


            return (
                <DelayBox
                key={index}
                from={from}
                to={to}
                fromDate={fromDate}
                lateFromDate={lateFromDate}
                delay={delay}
                navigation={navigation}
                />
            );
        });

        return delaysToRender;
    }

    const markers = trainModel.dedupeDelaysOnlyFrom(delays)
        .map((delay, index) => {
            const title:string = delay.FromLocation[0].AdvertisedLocationName;
            const longitude:string = delay.FromLocation[0].Coords.split(' ')[0];
            const latitude:string = delay.FromLocation[0].Coords.split(' ')[1];

            return (
                <Marker
                    title={title}
                    key={index}
                    coordinate={{
                            latitude: parseFloat(latitude),
                            longitude: parseFloat(longitude)
                        }}
                    description={delay.FromLocation[0].LocationName}
                    onPress={() => {
                        setStationDelays(
                            getDelaysSingleStation(delay.FromLocation[0].LocationName)
                        );
                    }}
                />
            );
        });

    return (
        <ScrollView>
            <View>
                <MapView
                    style={base.styles.map}
                    initialRegion={{
                            latitude: 62.147184,
                            longitude: 15.282805,
                            latitudeDelta: 15,
                            longitudeDelta: 15
                        }}
                >
                {markers}
                {userMarker}
                </MapView>
            </View>
            <View>
            {
                stationDelays.length ? stationDelays :
                <View style={base.styles.homeTextPlaceholder}>
                    <Text style={typo.styles.stationBoxText}>
                        Tryck på en station för att visa förseningar
                    </Text>
                </View>
            }
            </View>
        </ScrollView>
    );
}
