import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { showMessage } from 'react-native-flash-message';

import { base, typo } from '../Styles/index';
import stationPicker from '../types/screens/stationPicker';
import userModel from '../models/userModel';
import trainModel from '../models/trainModel';

export default function StationPicker(props:stationPicker) {
    const [currentItem, setCurrentItem] = useState<string>('A');

    const stations = trainModel.sortStations(props.stations);

    const stationPickerItems = stations.map((station, index) => {
        return (
            <Picker.Item
                key={index}
                label={station.AdvertisedLocationName}
                value={station.LocationSignature}
            />
        );
    });

    function saveData() {
        if ( !(props.userFavorites.includes(currentItem)) ) {
            props.setUserFavorites([...props.userFavorites, currentItem]);
            showMessage({
                message: 'Tillagd',
                description: 'Station tillagd i favoriter.',
                type: 'success'
            });

            userModel.saveStation(currentItem);
        } else {
            showMessage({
                message: 'Finns redan',
                description: 'Stationen finns redan i dina favoriter.',
                type: 'warning'
            });
        }
    }

    return (
        <View style={base.styles.stationDropDown}>
            <Text style={typo.styles.label}>Välj station</Text>
            <Picker
                selectedValue={currentItem}
                onValueChange={(signature:string) => {
                    setCurrentItem(signature);
                }}
            >
                {stationPickerItems}
            </Picker>

            <TouchableOpacity
                style={base.styles.pickerButton}
                onPress={() => {
                    saveData();
                }}
            >
                <Text>Spara station som favorit</Text>
            </TouchableOpacity>
        </View>
    );
}
