/* global test, expect */

import { render } from '@testing-library/react-native';
import Delay from '../interfaces/Idelay';
import favoritesStackParamList from '../types/favoritesStackParamList';
import FavoritesList from '../components/FavoritesList';
import { DrawerNavigationProp } from '@react-navigation/drawer';

test('Testar att "Logga ut"-knappen finns på favoritsidan', () => {
    const isLoggedIn = jest.fn();

    isLoggedIn.mockReturnValue(false);
    const delays:Delay[] = [];
    const navigation:any = {};
    const getDelays = jest.fn();

    const { getByTestId, debug } = render(
        <FavoritesList
            isLoggedIn={isLoggedIn}
            delays={delays}
            navigation={navigation}
            getDelays={getDelays}
        />
    );

    const button = getByTestId('button');

    expect(button.props.children[0].props.children).toBe('Logga ut');

    // debug(button.props.children);
});
