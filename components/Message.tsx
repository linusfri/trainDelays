import React from 'react';
import { View, Text } from 'react-native';
import { message } from './Messages';

import { base, typo } from '../Styles/index';

type MessageScreen = {
    message: message
}

export default function Message({ message }: MessageScreen) {
  return (
    <View style={base.styles.messageBox}>
        <Text style={[typo.styles.messageBoxText]}>
            <Text style={typo.styles.h3}>ID: {message.EventId}</Text>
            {'\n\n'}
            <Text>{message.ExternalDescription}</Text>
        </Text>
    </View>
  );
}
