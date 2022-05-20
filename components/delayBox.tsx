import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { base, typo } from '../Styles/index';
import TimeModel from '../models/timeModel';
import delayBox from '../types/screens/delayBox';

export default function DelayBox({navigation, fromDate, lateFromDate, delay, from, to }:delayBox) {
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
            <TouchableOpacity
                style={base.styles.button}
                onPress={ () => navigation.navigate(
                    'Detaljer', {delay: delay, time: delayTimeString}
                    )}
            >
                <Text style={typo.styles.buttonText}>Vad kan jag göra under tiden?</Text>
            </TouchableOpacity>
        </View>
    );
}
