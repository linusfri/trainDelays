import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

import { base, typo } from '../Styles/index';
import authModel from '../models/authModel';
import trainModel from '../models/trainModel';
import userModel from '../models/userModel';
import favorites from '../types/screens/favoriteList';
import StationPicker from './StationPicker';
import station from '../interfaces/Istation';
import IApiDataEntity from '../interfaces/IApiDataEntity';

export default function FavoritesList({navigation, isLoggedIn, delays, getDelays } : favorites) {
    const [userFavorites, setUserFavorites] = useState<string[]>([]);
    const [stations, setStations] = useState<station[]>([]);

    const stationsToRender = generateRenderableStations();

    function getStationBySign(stationSignature:string) {
        for (const station of stations) {
            if (stationSignature === station.LocationSignature) {
                return station;
            }
        }
        return null;
    }

    function generateRenderableStations() {
        let stationObjects:station[] = [];

        for (const signature of userFavorites) {
            const station = getStationBySign(signature);

            if (station !== null) {
                stationObjects.push(station);
            }
        }

        stationObjects = trainModel.sortStations(stationObjects);

        const stationsToRender = stationObjects.map((station:station, index:number) => {
            return (
                <View key={index} style={base.styles.stationNameBox}>
                    <Text
                        style={typo.styles.stationBoxText}
                        onPress={
                            () => navigation.navigate(
                                'Favoritdetaljer',
                                {delays: delays, station: station}
                            )
                        }
                        >
                        {station.AdvertisedLocationName}
                    </Text>
                </View>
            );
        });

        return stationsToRender;
    }

    async function getUserData() {
        const userData = await userModel.getUserStations();
        const userStationSigns = userData.map((data:IApiDataEntity) => {
            return data.artefact;
        });

        setUserFavorites(userStationSigns);
    }

    useEffect(() => {
        (async () => {
            setStations(await trainModel.getStations());
        })();
        getUserData();
        getDelays();
    }, []);


    return (
        <ScrollView>
            <StationPicker
                stations={stations}
                setUserFavorites={setUserFavorites}
                userFavorites={userFavorites}
                getDelays={getDelays}
            />
            <Text style={[base.styles.margin12Top, typo.styles.pWhite]}>Dina favoriter</Text>
            {stationsToRender}
            <TouchableOpacity
                style={base.styles.formButton}
                onPress={() => {
                    authModel.logout();
                    isLoggedIn();
                }}
                testID='button'
            >
                <Text style={typo.styles.buttonText}>Logga ut</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
