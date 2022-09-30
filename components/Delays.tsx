import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Delay from '../interfaces/Idelay';
import trainModel from '../models/trainModel';
import { base, typo } from '../Styles';

export default function delays({ delays }:{ delays: Delay[] }) {
    const deDupedDelays = trainModel.dedupeDelays(delays).map((delay, index) => {
        if (typeof delay.FromLocation !== 'undefined') {
          return (
            <View style={base.styles.stationNameBox} key={index}>
                <Text style={typo.styles.stationBoxText}>
                    {delay.FromLocation[0].AdvertisedLocationName}
                    <Ionicons name={'arrow-forward-outline'} size={24}/>
                    {delay.ToLocation[0].AdvertisedLocationName}
                </Text>
            </View>
          );
        }

        return <Text key={index}>Okänd</Text>;
      });

      return (
          <ScrollView>
              {deDupedDelays}
          </ScrollView>
      );
}
