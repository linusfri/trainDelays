import { useState } from 'react';
import { showMessage } from 'react-native-flash-message';

import Auth from '../../interfaces/Iauth';
import auth from '../../types/screens/authStack';
import AuthModel from '../../models/authModel';
import AuthFields from './AuthFields';

export default function Login({navigation, setIsLoggedIn}:auth) {
    const [auth, setAuth] = useState<Partial<Auth>>({});

    async function doLogin() {
        if (auth.email && auth.password) {
            const result = await AuthModel.login(auth.email, auth.password);

            if (result.type === 'success') {
                setIsLoggedIn(true);
            }

            showMessage({
                message: result.title,
                description: result.message,
                type: result.type
            });
        } else {
            showMessage({
                message: 'Saknas',
                description: 'E-post eller lösenord saknas',
                type: 'warning'
            });
        }
    }

    return (
        <AuthFields
            auth={auth}
            setAuth={setAuth}
            submit={doLogin}
            title="Logga in"
            navigation={navigation}
        />
    );
}
