/* global test, expect */

import { render } from '@testing-library/react-native';
import delay from '../interfaces/Idelay';
import MapList from '../components/MapList';

test('Testar att "Tryck på en station för att visa förseningar" visas på MapList', () => {
    const delays:delay[] = [];
    const getDelays = jest.fn();
    const navigation = {};
    const {getByText} = render(
        <MapList delays={delays} getDelays={getDelays} navigation={navigation}/>
    );

    const text = getByText('Tryck på en station för att visa förseningar');

    expect(text).toBeDefined();
});
