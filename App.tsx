import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';

import Delay from './interfaces/delay';
import { rootDrawerParamList } from './types/rootDrawerParamList';
import rootNavigation from './types/rootNavigation';
import { base } from './Styles/index';
import HeaderNav from './components/headerNav';
import Messages from './components/messages';
import Favorites from './components/favorites';
import List from './components/list';
import trainModel from './models/trainModel';
import Home from './components/home';

const Drawer = createDrawerNavigator<rootDrawerParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent'
  }
};

export default function App() {
  const [delays, getDelays] = useState<Delay[]>([]);

  async function getAllDelays() {
    getDelays(await trainModel.getDelaysPerStation());
  }
  useEffect(() => {
    getAllDelays();
  }, []);

  return (
    <SafeAreaView style={base.styles.appMainContainer}>
      <NavigationContainer theme={navTheme}>
        <Drawer.Navigator screenOptions={({ navigation } : rootNavigation) => ({
          headerRight: () => <HeaderNav navigation={navigation}/>
        })}
        >
          <Drawer.Screen name='Hem'>
            {(screenProps) => <Home {...screenProps} delays={delays} getDelays={getAllDelays}/>}
          </Drawer.Screen>
          <Drawer.Screen name='Lista'>
            {(screenProps) => <List {...screenProps} delays={delays} getDelays={getAllDelays}/>}
          </Drawer.Screen>
          <Drawer.Screen name='Meddelanden' component={Messages}/>
          <Drawer.Screen name='Favoriter'>
            {(screenProps) => <Favorites {...screenProps}/>  }
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
