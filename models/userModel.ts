import authConfig from '../config/auth.json';
import storageModel from './storageModel';
class userModel {
    static async saveStation(stationSignature:string) {
        const JWT = await storageModel.readToken();

        const data = {
            api_key: authConfig.api_key,
            artefact: stationSignature
        };

        const response = await fetch(`${authConfig.url}/data`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-access-token': JWT.token
            },
            body: JSON.stringify(data)
        });

        const jsonData = await response.json();

        return jsonData.data;
    }

    static async getUserStations() {
        const JWT = await storageModel.readToken();

        const response = await fetch(`${authConfig.url}/data?api_key=${authConfig.api_key}`, {
            headers: {
                'x-access-token': JWT.token
            }
        });

        const jsonData = await response.json();

        return jsonData.data;
    }
}

export default userModel;
