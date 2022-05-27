import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import MapView, { Circle } from 'react-native-maps';

import { base, typo } from '../Styles/index';
import stackRoute from '../types/homeStackRoute';
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
                        radius={distance / 2}
                        fillColor='rgba(0,0,255,0.1)'
                        strokeColor='rgba(0,0,255,0.5)'
                    />
                </MapView>
            </View>
            <View style={base.styles.delayBox}>
                <Text style={[typo.styles.h2, typo.styles.delayBoxText]}>Gå på en promenad</Text>
            </View>
            <View style={base.styles.detailsBox}>
                {
                    (distance !== 0) ?
                    <Text style={typo.styles.pWhite}>
                        Cirkeln visar vart du kan gå, om du går i en rak linje.
                        Om du inte vill gå i en rak linje så har du nytta av följande information:
                        {'\n\n'}
                        1. Du kan gå cirka 100m per minut.
                        {'\n'}
                        2. Du hinner gå ca {distance} meter.
                        {'\n'}
                        3. Tid har dragits av på förseningen
                        för att du ska få lite marginal.

                    </Text> :
                    <Text style={typo.styles.pWhite}>
                        Tid reserveras så att du hinner med tåget.
                        Därför är ingen idé att gå eftersom det finns för lite tid.
                    </Text>
                }
            </View>
        </View>
    );
}
