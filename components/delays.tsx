import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Delay from '../interfaces/Idelay';
import trainModel from '../models/trainModel';

export default function delays({ delays }:{ delays: Delay[] }) {
    const deDupedDelays = trainModel.dedupeDelays(delays).map((delay, index) => {
        if (typeof delay.FromLocation !== 'undefined') {
          return (
            <View key={index}>
                <Text>
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
