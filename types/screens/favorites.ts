import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { rootDrawerParamList } from './rootDrawerParamList';
import { RouteProp } from '@react-navigation/native';


type favorites = {
    navigation: DrawerNavigationProp<rootDrawerParamList>,
    isUserLoggedIn: () => void
}

export default favorites;
