import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';
import Home from '../screens/tabscreens/Home';
import Leagues from '../screens/tabscreens/Leagues';
import Research from '../screens/tabscreens/Research';
import Profile from '../screens/tabscreens/Profile';
import Leaderboard from '../screens/tabscreens/Leaderboard';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: focused ? COLORS.purple_900 : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.purple_900 : COLORS.gray,
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leagues"
        component={Leagues}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.leagues}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: focused ? COLORS.purple_900 : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.purple_900 : COLORS.gray,
                  fontSize: 10,
                }}>
                Leagues
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Research"
        component={Research}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.research}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: focused ? COLORS.purple_900 : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.purple_900 : COLORS.gray,
                  fontSize: 10,
                }}>
                Research
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.leaderboard}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: focused ? COLORS.purple_900 : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.purple_900 : COLORS.gray,
                  fontSize: 10,
                }}>
                Leaderboard
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.user}
                style={{
                  height: 18,
                  width: 18,
                  tintColor: focused ? COLORS.purple_900 : COLORS.gray,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.purple_900 : COLORS.gray,
                  fontSize: 10,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
