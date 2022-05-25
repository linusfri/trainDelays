import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { typo, base, forms } from '../../Styles/index';
import authFields from '../../types/screens/authFields';

export default function AuthFields({ auth, setAuth, title, submit, navigation}:authFields) {
    return (
        <View testID='Logga in' style={forms.styles.base}>
            <Text style={typo.styles.label}>E-post</Text>
            <TextInput
                style={forms.styles.input}
                onChangeText={(text:string) => {
                    setAuth({...auth, email: text});
                }}
                value={auth?.email}
                keyboardType='email-address'
            />
            <Text style={typo.styles.label}>Lösenord</Text>
            <TextInput
                style={forms.styles.input}
                onChangeText={(text:string) => {
                    setAuth({ ...auth, password: text });
                }}
                value={auth?.password}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={base.styles.formButton}
                onPress={() => {
                    submit();
                    navigation.navigate('Login');
                }}
            >
                <Text style={typo.styles.buttonText}>{title}</Text>
            </TouchableOpacity>
            {title === 'Logga in' &&
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Registrera');
                    }}
                    style={base.styles.formButton}
                >
                    <Text style={typo.styles.buttonText}>Registrera istället</Text>
                </TouchableOpacity>
            }
        </View>
    );
}
