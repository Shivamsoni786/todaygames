import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Games from '../toptabscreens/Games';
import Badges from '../toptabscreens/Badges';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Badges"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 12},
      }}>
      <Tab.Screen
        name="Games"
        component={Games}
        options={{tabBarLabel: 'Games played'}}
      />
      <Tab.Screen
        name="Badges"
        component={Badges}
        options={{tabBarLabel: 'Badges'}}
      />
    </Tab.Navigator>
  );
};
export default Home;
