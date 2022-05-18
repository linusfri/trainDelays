import type { stackParamList } from './stackParamList';
import Delay from '../interfaces/delay';
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
