import type { rootDrawerParamList } from '../rootDrawerParamList';
import Delay from '../../interfaces/Idelay';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type home = {
    navigation: DrawerNavigationProp<rootDrawerParamList>;
    delays: Delay[],
    getDelays: () => void,
};

export default home;
