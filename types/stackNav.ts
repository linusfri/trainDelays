import type { stackParamList } from './stackParamList';
import Delay from '../interfaces/delay';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type stackNav = {
    navigation: NativeStackNavigationProp<stackParamList>,
    delays: Delay[],
    getDelays: () => void
};

export default stackNav;
