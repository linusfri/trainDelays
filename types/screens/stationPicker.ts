import station from '../../interfaces/Istation';
import React from 'react';

type stationPicker = {
    stations: station[],
    userFavorites: string[],
    setUserFavorites: React.Dispatch<React.SetStateAction<string[]>>,
    getDelays: () => void
};

export default stationPicker;

