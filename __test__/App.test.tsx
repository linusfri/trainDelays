import { NavigationContainer, ServerContainer } from '@react-navigation/native';
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import React from 'react';
import App from '../App';

beforeEach(() => {
    jest.useFakeTimers('legacy');
});

afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
});

test('Testar så att hemskärmen är kartvyn och att den innehåller texten "Tryck på en station för att visa förseningar" ', async () => {
    await waitFor(() => {
        const { getByText, debug } = render(<App />);

        const text = getByText('Tryck på en station för att visa förseningar');

        jest.advanceTimersByTime(15000);
        expect(text).toBeDefined();
    });
});

test('Testar att ett tryck på logga in tar en till sidan "Login"', async () => {
    await waitFor(() => {
        const {getByText, getByTestId} = render(<App/>);

        const loginTab = getByText('Logga in');

        fireEvent(loginTab, 'press');

        const newScreen = getByTestId('Logga in');

        expect(newScreen).toBeDefined();
    });
});
