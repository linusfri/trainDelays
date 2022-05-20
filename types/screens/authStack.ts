import { authStackParamList } from '../authStackParamList';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type auth = {
    navigation: DrawerNavigationProp<authStackParamList>;
    setIsLoggedIn : (bool:boolean) => void
};

export default auth;
