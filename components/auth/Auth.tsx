import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { base } from '../../Styles';

import auth from '../../types/screens/authStack';
import { authStackParamList } from '../../types/authStackParamList';
import Login from './Login';
import Register from './Register';

const Stack = createNativeStackNavigator<authStackParamList>();

export default function Auth({navigation, setIsLoggedIn} : auth) {
    return (
        <View style={base.styles.container}>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    options={{...base.stackHeaderStyle}}
                >
                    {(screenprops) => <Login {...screenprops} setIsLoggedIn={setIsLoggedIn}/>}
                </Stack.Screen>
                <Stack.Screen
                    name='Registrera'
                    component={Register}
                    options={{...base.stackHeaderStyle}}
                />
            </Stack.Navigator>
        </View>
    );
}


