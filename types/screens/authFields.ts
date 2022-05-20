import Iauth from '../../interfaces/Iauth';
import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { authStackParamList } from '../authStackParamList';

type authFields = {
    auth: Partial<Iauth>,
    setAuth: React.Dispatch<React.SetStateAction<Partial<Iauth>>>,
    title: string,
    submit: () => void,
    navigation: DrawerNavigationProp<authStackParamList>
};

export default authFields;

