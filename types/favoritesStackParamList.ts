import delay from '../interfaces/Idelay';
import station from '../interfaces/Istation';

type favoritesStackParamList = {
    Favoritlista: undefined,
    Favoritdetaljer: {delays: delay[], station: station}
}

export default favoritesStackParamList;
