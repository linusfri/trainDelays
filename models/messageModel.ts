import config from '../config/config.json';

export default class MessageModel {
    static async getAllMessages() {
        const res = await fetch(`${config.url}/messages`);
        const messages = res.json();

        return messages;
    }
}
