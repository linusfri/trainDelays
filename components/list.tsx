import { Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, {useEffect} from 'react';

import Delays from './Delays';
import { base } from '../Styles';
import home from '../types/screens/home';
import delays from './Delays';


export default function List({navigation, delays, getDelays } : home) {
      useEffect(() => {
        getDelays();
      }, []);

    return (
      <View testID='List' style={base.styles.container}>
        <ScrollView>
            <Delays delays={delays} />
        </ScrollView>
      </View>
    );
}
