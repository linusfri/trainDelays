import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Marker, Circle } from 'react-native-maps';

import { base } from '../Styles/index';
import Delay from '../interfaces/delay';
import home from '../types/home';
import stackRoute from '../types/stackRoute';
import TimeModel from '../models/timeModel';
import WaitModel from '../models/waitModel';

export default function Details({ route } : stackRoute) {
    const [minutes, setMinutes] = useState<number>(0);
    const [distance, setDistance] = useState<number>(0);
    const { delay, time } = route.params || null;

    const long:string = delay.FromLocation[0].Coords.split(' ')[0];
    const lat:string = delay.FromLocation[0].Coords.split(' ')[1];


    async function awaitMinutes() {
        setDistance(await WaitModel.calculateDistance(minutes));
    }
    useEffect(() => {
        setMinutes(+TimeModel.getTimeInMinutes(time).toFixed(2));
        awaitMinutes();
    });

    return (
        <View>
            <View>
                <MapView
                    style={base.styles.map}
                    initialRegion={
                        {
                            latitude: parseFloat(lat),
                            longitude: parseFloat(long),
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05
                        }
                    }
                >
                    <Circle
                        center={{
                            latitude: parseFloat(lat),
                            longitude: parseFloat(long),
                        }}
                        radius={distance}
                        fillColor='rgba(0,0,255,0.1)'
                        strokeColor='rgba(0,0,255,0.5)'
                    />
                </MapView>
            </View>
            <Text>{`Minutes late: ${minutes}`}</Text>
        </View>
    );
}
