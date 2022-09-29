import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { rootDrawerParamList } from './rootDrawerParamList';

type rootDrawer = {
    navigation: DrawerNavigationProp<rootDrawerParamList>,
    isLoggedIn: boolean,
}

export default rootDrawer;
