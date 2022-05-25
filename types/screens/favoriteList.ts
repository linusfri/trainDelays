import delay from '../../interfaces/Idelay';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { favoritesStackParamList } from '../favoritesStackParamList';

type favorites = {
    navigation: DrawerNavigationProp<favoritesStackParamList>
    delays: delay[],
    getDelays: () => void,
    isLoggedIn: () => void
}

export default favorites;
