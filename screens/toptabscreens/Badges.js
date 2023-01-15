import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, icons} from '../../constants';

const Badges = () => {
  const data = [
    {
      id: 1,
      title: 'First Stripe Earned',
      body: 'Top 10% of highest spending players in a month',
    },
    {
      id: 2,
      title: 'Born Winner',
      body: 'Top 10% of highest spending players in a month',
    },
    {
      id: 3,
      title: 'Trader of the Month',
      body: 'Won 7 under-over games in a row',
    },
    {
      id: 4,
      title: 'Rising Star',
      body: 'Top 10% of highest spending players in a month',
    },
    {
      id: 5,
      title: 'Jackpot',
      body: 'Top 10% of highest spending players in a month',
    },
    {
      id: 6,
      title: 'Impossible',
      body: 'Top 10% of highest spending players in a month',
    },
    {
      id: 7,
      title: 'First Stripe Earned',
      body: 'Top 10% of highest spending players in a month',
    },
  ];

  const [badgesData, setBadgesData] = React.useState(data);

  return (
    <ScrollView
      style={{
        backgroundColor: COLORS.purple_50,
      }}>
      <View style={{margin: 15}}>
        {badgesData.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: COLORS.white,
              elevation: 1,
              padding: 15,
              marginBottom: 10,
            }}>
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 50,
                backgroundColor: COLORS.orange,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={icons.clock}
                style={{
                  height: 47,
                  width: 47,
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{width: 15}}></View>
            <View style={{flex: 1}}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: COLORS.black}}>
                {item.title}
              </Text>
              <Text
                style={{marginTop: 5, fontSize: 12, color: COLORS.darkGray2}}>
                {item.body}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Badges;
