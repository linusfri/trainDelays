import type { stackParamList } from '../homeStackParamList';
import Delay from '../../interfaces/Idelay';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type stackNav = {
    navigation: NativeStackNavigationProp<stackParamList>,
    delays: Delay[],
    getDelays: () => void
};

export default stackNav;
