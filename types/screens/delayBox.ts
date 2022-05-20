import type { stackParamList } from './homeStackParamList';
import Delay from '../interfaces/Idelay';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type delayBox = {
    navigation: NativeStackNavigationProp<stackParamList>,
    fromDate: string,
    lateFromDate: string,
    delay: Delay,
    from: string,
    to: string,
};

export default delayBox;
