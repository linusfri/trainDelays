import { View } from 'react-native';
import React, { useEffect, useState } from 'react';

import messageModel from '../models/messageModel';
import Message from './Message';
import { base } from '../Styles/index';
import { ScrollView } from 'react-native-gesture-handler';

export interface message {
    EventId: number
    ExternalDescription: string
}

export default function Messages() {
    const [messages, setMessages] = useState<JSX.Element>();

    async function getAllMessages() {
        const messageObj = await messageModel.getAllMessages();

        const descriptions = messageObj.data.map((data: any) => {
            return (
                { EventId: data.EventId, ExternalDescription: data.ExternalDescription }
            );
        });

        const messageBoxes = descriptions.map((message: message, index: number) => {
            return (
                <Message key={index} message={message}/>
            );
        });

        setMessages(messageBoxes);
    }

    useEffect(() => {
        getAllMessages();
    }, []);


    return (
        <View style={base.styles.container}>
            <ScrollView>
                {messages}
            </ScrollView>
        </View>
    );
}
