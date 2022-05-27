import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as NavigationBar from 'expo-navigation-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';
import FlashMessage from 'react-native-flash-message';

import Delay from './interfaces/Idelay';
import { rootDrawerParamList } from './types/rootDrawerParamList';
import { base } from './Styles/index';
import trainModel from './models/trainModel';
import authModel from './models/authModel';
import HeaderNav from './components/HeaderNav';
import Messages from './components/Messages';
import Favorites from './components/Favorites';
import List from './components/List';
import Home from './components/Home';
import Auth from './components/auth/Auth';

const Drawer = createDrawerNavigator<rootDrawerParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2F2F2F',
  }
};

NavigationBar.setBackgroundColorAsync('#000');

export default function App() {
  const [delays, getDelays] = useState<Delay[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [interval, setTimeInterval] = useState<NodeJS.Timer>();

  async function getAllDelays() {
    getDelays(await trainModel.getDelaysPerStation());
  }

  async function isUserLoggedIn() {
    setIsLoggedIn(await authModel.loggedIn());
  }

  useEffect(() => {
    clearInterval(interval);
    setTimeInterval(setInterval(getAllDelays, 15000));
    isUserLoggedIn();
  }, []);

  return (
    <SafeAreaView style={base.styles.appMainContainer}>
      <NavigationContainer theme={navTheme}>
        <Drawer.Navigator screenOptions={({ navigation }) => ({
          headerRight: () => <HeaderNav navigation={navigation} isLoggedIn={isLoggedIn}/>,
          headerStyle: {
            backgroundColor: '#212121',
          },
          headerTintColor: 'white',
          drawerStyle: {
            backgroundColor: '#303030'
          },
          drawerLabelStyle: {
            color: 'white'
          },
          drawerActiveBackgroundColor: '#494949'
        })}
        >
          <Drawer.Screen name='Hem'>
            {(screenProps) => <Home {...screenProps} delays={delays} getDelays={getAllDelays}/>}
          </Drawer.Screen>
          <Drawer.Screen name='Lista'>
            {(screenProps) => <List {...screenProps} delays={delays} getDelays={getAllDelays}/>}
          </Drawer.Screen>
          <Drawer.Screen name='Meddelanden' component={Messages}/>

          {
            isLoggedIn ?
            <Drawer.Screen name='Favoriter'>
              {(screenProps) =>
                <Favorites
                  {...screenProps}
                  isLoggedIn={isUserLoggedIn}
                  delays={delays}
                  getDelays={getAllDelays}
                />
              }
            </Drawer.Screen> :
            <Drawer.Screen name='Logga in'>
              {(screenProps) => <Auth {...screenProps} setIsLoggedIn={setIsLoggedIn} /> }
            </Drawer.Screen>
          }
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style='light' backgroundColor='#212121'  />
      <FlashMessage position='top' hideStatusBar={false} style={base.styles.flashMessage}/>
    </SafeAreaView>
  );
}
