import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Dashboard from './screens/Dashboard';
import Tabs from './navigation/tabs';
import Games from './screens/toptabscreens/Games';
import Badges from './screens/toptabscreens/Badges';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Dashboard'}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="HomeTab" component={Tabs} />
        <Stack.Screen name="Badges" component={Badges} />
        <Stack.Screen name="Games" component={Games} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
