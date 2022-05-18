import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, {useEffect} from 'react';

import Delays from './delays';
import { base } from '../Styles';
import home from '../types/home';
import delays from './delays';


export default function List({navigation, delays, getDelays } : home) {
      useEffect(() => {
        getDelays();
      }, []);

    return (
        <View>
        <ScrollView>
            <Delays delays={delays} />
        </ScrollView>
      </View>
    );
}
