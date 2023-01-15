import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {icons, COLORS} from '../../constants';

const Profile = () => {
  return (
    <View style={{margin: 15}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <Image source={icons.dot} style={{height: 15, width: 15}} />
        <Text style={{fontSize: 14, color: COLORS.gray}}>Profile</Text>

        <View style={{marginTop: 20}}>
          <Image
            source={icons.message}
            style={{height: 15, width: 15, tintColor: COLORS.darkGray}}
          />
          <Text
            style={{
              top: -25,
              left: 5,
              fontSize: 10,
              backgroundColor: COLORS.purple_800,
              borderRadius: 50,
              color: COLORS.white,
              textAlign: 'center',
            }}>
            1
          </Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={icons.profile}
            style={{height: 80, width: 80, borderRadius: 50}}
          />
          <TouchableOpacity
            style={{
              marginTop: -20,
              left: 25,
              backgroundColor: COLORS.white,
              padding: 5,
              borderRadius: 50,
            }}>
            <Image source={icons.edit} style={{height: 10, width: 10}} />
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 15, color: COLORS.black, marginTop: 20}}>
          Jina Simons
        </Text>
        <Text style={{fontSize: 12, color: COLORS.gray, marginTop: 5}}>
          6000 Pts
        </Text>
        <Text style={{fontSize: 15, color: COLORS.gray, marginTop: 20}}>
          I'm a software developer that has been in the crypto space since 2012.
          Ans l've seen it grow and falter over a period of time. Really happy
          to be here!
        </Text>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
          <Image
            source={icons.logout}
            style={{height: 18, width: 18, tintColor: COLORS.darkGray}}
          />
          <Text
            style={{
              fontSize: 14,
              color: COLORS.gray,
              left: 8,
              fontWeight: '500',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          borderWidth: 1,
          borderColor: COLORS.lightGray1,
          borderRadius: 5,
          padding: 15,
          flexDirection: 'row',
        }}>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 14, color: COLORS.darkGray}}>
            Under or Over
          </Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#dcfce7',
                borderRadius: 50,
                padding: 6,
              }}>
              <Image
                source={icons.up}
                style={{width: 15, height: 15, tintColor: COLORS.green}}
              />
            </View>
            <Text
              style={{
                left: 10,
                color: COLORS.black,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              81%
            </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'flex-start'}}>
          <Text style={{fontSize: 14, color: COLORS.darkGray}}>Top 5</Text>
          <View
            style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: '#fee2e2',
                borderRadius: 50,
                padding: 6,
              }}>
              <Image
                source={icons.down}
                style={{width: 15, height: 15, tintColor: COLORS.red}}
              />
            </View>
            <Text
              style={{
                left: 10,
                color: COLORS.black,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              -51%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
