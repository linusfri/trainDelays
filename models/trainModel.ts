import config from '../config/config.json';

import Station from '../interfaces/station';
import StationSignGeoName from '../interfaces/stationSignGeoName';
import Delay from '../interfaces/delay';

const trainModel = {
    getStations: async function getStations() {
        const result = await fetch(`${config.url}/stations`);
        const json = await result.json();

        return await json.data;
    },

    getDelays: async function getDelays() {
        const result = await fetch(`${config.url}/delayed`);
        const json = await result.json();

        return await json.data;
    },

    genStationNamesCoordinates: async function genStationNamesCoordinates() {
        const stations:Station[] = await this.getStations();
        const stationNamesCoordinates:StationSignGeoName = {};

        for (const station of stations) {
            const coordString = station.Geometry.WGS84;

            stationNamesCoordinates[station.LocationSignature] = {
                AdvertisedLocationName: station.AdvertisedLocationName,
                Coords: coordString.substring(7, coordString.length - 1)
            };
        }

        return stationNamesCoordinates;
    },

    dedupeDelays: function dedupeDelays(delays:Delay[]) {
        const checkList:string[] = [];
        let currentTrip = '';
        let currentFrom = '';
        let currentTo = '';

        const deDupedDelays:Delay[] = delays.filter((delay) => {
            if (typeof delay.FromLocation !== 'undefined'
                || typeof delay.ToLocation !== 'undefined') {
                currentFrom = delay.FromLocation[0].LocationName;
                currentTo = delay.ToLocation[0].LocationName;

                currentTrip = `${currentFrom}->${currentTo}`;

                if ( !(checkList.includes(currentTrip)) ) {
                    checkList.push(currentTrip);
                    return delay;
                }
            }

            return false;
        });

        return this.sortDelays(deDupedDelays);
    },

    sortDelays: function sortDelays(delays:Delay[]) {
        const undefinedValues = delays.filter(delay => typeof delay.FromLocation === 'undefined');
        const definedValues = delays.filter(delay => typeof delay.FromLocation !== 'undefined');

        definedValues.sort((a, b) => {
            const left = a.FromLocation[0].AdvertisedLocationName;
            const right = b.FromLocation[0].AdvertisedLocationName;

            if (left < right) {
                return -1;
            }

            if (left > right) {
                return 1;
            }

            return 0;
        });

        return [...definedValues, ...undefinedValues];
    },

    sortDelaysByTo: function (delays:Delay[]) {
        const undefinedValues = delays.filter(delay => typeof delay.ToLocation === 'undefined');
        const definedValues = delays.filter(delay => typeof delay.ToLocation !== 'undefined');

        definedValues.sort((a, b) => {
            const left = a.ToLocation[0].AdvertisedLocationName;
            const right = b.ToLocation[0].AdvertisedLocationName;

            if (left < right) {
                return -1;
            }

            if (left > right) {
                return 1;
            }

            return 0;
        });

        return [...definedValues, ...undefinedValues];
    },

    getDelayNamesAndCoords: async function getDelayNamesAndCoords(delays:Delay[]) {
        const stationNamesCoords:StationSignGeoName = await this.genStationNamesCoordinates();

        for (const delay of delays) {
            if (typeof delay.FromLocation === 'undefined') {
                continue;
            }

            const fromStationSign = delay.FromLocation[0].LocationName;
            const toStationSign = delay.ToLocation[0].LocationName;

            const fromStationName = stationNamesCoords[fromStationSign].AdvertisedLocationName;
            const fromStationCoords = stationNamesCoords[fromStationSign].Coords;

            const toStationName = stationNamesCoords[toStationSign].AdvertisedLocationName;
            const toStationCoords = stationNamesCoords[toStationSign].Coords;

            delay.FromLocation[0].AdvertisedLocationName = fromStationName;
            delay.FromLocation[0].Coords = fromStationCoords;

            delay.ToLocation[0].AdvertisedLocationName = toStationName;
            delay.ToLocation[0].Coords = toStationCoords;
        }

        return delays;
    },

    getDelaysPerStation: async function() {
        let delays = await this.getDelays();

        delays = await this.getDelayNamesAndCoords(delays);

        return delays;
    },

    dedupeDelaysOnlyFrom: function(delays: Delay[]) {
        const checkList:string[] = [];
        let currentFrom = '';

        const deDupedDelays:Delay[] = delays.filter((delay) => {
            if (typeof delay.FromLocation !== 'undefined') {
                currentFrom = delay.FromLocation[0].LocationName;

                if ( !(checkList.includes(currentFrom)) ) {
                    checkList.push(currentFrom);
                    return delay;
                }
            }

            return false;
        });

        return this.sortDelays(deDupedDelays);
    },
};

export default trainModel;
