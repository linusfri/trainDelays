import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { rootDrawerParamList } from './rootDrawerParamList';
import { RouteProp } from '@react-navigation/native';


type rootDrawer = {
    navigation: DrawerNavigationProp<rootDrawerParamList>,
    isLoggedIn: boolean,
}

export default rootDrawer;
