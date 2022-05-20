import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';


import AuthFields from './AuthFields';
import Auth from '../../interfaces/Iauth';
import AuthModel from '../../models/authModel';
import auth from '../../types/screens/authStack';

export default function Register({ navigation }:auth) {
    const [auth, setAuth] = useState<Partial<Auth>>({});

    async function doRegister() {
        if (auth.email && auth.password) {
            const result = await AuthModel.register(auth.email, auth.password);

            if (result.type === 'success') {
                showMessage({
                    description: result.title,
                    message: result.message,
                    type: result.type
                });
            }
        } else {
            showMessage({
                description: 'Fel',
                message: 'Felaktiga uppgifter i registreringsformuläret',
                type: 'warning'
            });
        }
    }

    return (
        <AuthFields
            title={'Registrera'}
            setAuth={setAuth}
            auth={auth}
            navigation={navigation}
            submit={doRegister}
        />
    );
}
