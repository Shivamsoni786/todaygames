import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS, FONTS, icons} from '../constants';

const Dashboard = ({navigation}) => {
  const priceArr = [
    {price_pool: '12,000', under: '3.25', over: '1.25', entry_fees: '5'},
  ];

  const [prediction, setPrediction] = React.useState(false);

  function predictionModal() {
    return (
      <Modal animationType="slide" visible={prediction} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setPrediction(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.transparentBlack6,
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: COLORS.white,
                height: '50%',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                padding: 15,
              }}>
              <TouchableOpacity onPress={() => setPrediction(false)}>
                <Image
                  source={icons.minus}
                  style={{
                    alignSelf: 'center',
                    height: 15,
                    width: 25,
                    tintColor: COLORS.gray2,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                Your Prediction is Under
              </Text>
              <Text
                style={{
                  marginTop: 20,
                  fontSize: 10,
                  color: COLORS.gray,
                  textTransform: 'uppercase',
                }}>
                entry tickets
              </Text>

              <ScrollView
                style={{alignSelf: 'center'}}
                showsVerticalScrollIndicator={false}>
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20,
                ].map((item, index) => (
                  <TouchableOpacity
                    onPress={() => console.log(index)}
                    key={index}>
                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', padding: 1}}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      marginTop: 10,
                      fontSize: 10,
                      color: COLORS.gray,
                    }}>
                    You can win
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: COLORS.green,
                      fontWeight: '500',
                    }}>
                    $2000
                  </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: COLORS.darkGray,
                      textTransform: 'capitalize',
                      right: 10,
                    }}>
                    total
                  </Text>
                  <Image
                    source={icons.dot}
                    style={{
                      height: 10,
                      width: 10,
                      // tintColor: COLORS.yellow,
                      right: 5,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 10,
                      color: COLORS.darkGray,
                      textTransform: 'capitalize',
                      fontWeight: '500',
                    }}>
                    5
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.purple_800,
                  padding: 10,
                  borderRadius: 15,
                  marginTop: 20,
                  alignItems: 'center',
                }}
                onPress={() => setPrediction(false)}>
                <Text style={{fontSize: 12, color: COLORS.white}}>
                  Submit my prediction
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  marginTop: 25,
                  alignSelf: 'center',
                  borderWidth: 2.5,
                  borderRadius: 8,
                  borderColor: COLORS.gray2,
                  width: '30%',
                }}></View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
  return (
    <View style={{margin: 15}}>
      <Text style={{fontSize: 20, color: 'black', fontWeight: '500'}}>
        Today's Games
      </Text>
      <View
        style={{
          marginTop: 20,
          padding: 15,
          backgroundColor: COLORS.purple_800,
          borderRadius: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 12, color: COLORS.purple_200}}>
              UNDER OR OVER
            </Text>
            <Image
              source={icons.information}
              style={{
                height: 12,
                width: 12,
                left: 10,
                tintColor: COLORS.purple_300,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: COLORS.purple_300, fontSize: 12, right: 10}}>
              starting in
            </Text>
            <Image
              source={icons.clock}
              style={{
                height: 12,
                width: 12,
                tintColor: COLORS.purple_300,
                right: 5,
              }}
            />
            <Text style={{color: COLORS.purple_200, fontSize: 12}}>
              03:23:12
            </Text>
          </View>
        </View>
        <Text style={{fontSize: 12, color: COLORS.purple_300, marginTop: 10}}>
          Bitcoin price will be under
        </Text>
        <Text style={{fontSize: 12, color: COLORS.white}}>
          $24,524 at 7 ET 22nd Jan'21
        </Text>
      </View>
      <View>
        <View
          style={{
            borderWidth: 1,
            borderColor: COLORS.lightGray1,
            borderRadius: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 15,

              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                flex: 1.2,
                fontSize: 12,
                color: COLORS.gray2,
                textTransform: 'uppercase',
              }}>
              price pool
            </Text>
            <Text
              style={{
                flex: 0.8,
                fontSize: 12,
                color: COLORS.gray2,
                textTransform: 'uppercase',
              }}>
              under
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 12,
                color: COLORS.gray2,
                textTransform: 'uppercase',
              }}>
              over
            </Text>
            <Text
              style={{
                flex: 1,
                fontSize: 12,
                color: COLORS.gray2,
                textTransform: 'uppercase',
              }}>
              entry fees
            </Text>
          </View>

          {priceArr.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 5,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  flex: 1.2,
                  fontSize: 12,
                  color: COLORS.black,
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}>
                ${item.price_pool}
              </Text>
              <Text
                style={{
                  flex: 0.8,
                  fontSize: 12,
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                {item.under}x
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: COLORS.black,
                  fontWeight: '500',
                }}>
                {item.over}x
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 12,
                  color: COLORS.black,
                  textTransform: 'uppercase',
                  fontWeight: '500',
                }}>
                {item.entry_fees}
              </Text>
            </View>
          ))}
          <View style={{padding: 10}}>
            <Text
              style={{
                marginTop: 5,
                fontSize: 14,
                fontWeight: '500',
                color: COLORS.darkGray2,
              }}>
              what's your prediction?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.purple_900,
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  paddingHorizontal: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={icons.down}
                  style={{
                    height: 10,
                    width: 10,
                    tintColor: COLORS.white,
                  }}
                />
                <Text
                  style={{
                    left: 3,
                    fontSize: 12,
                    fontWeight: '500',
                    color: COLORS.white,
                  }}>
                  Under
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.purple_700,
                  padding: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  paddingHorizontal: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setPrediction(true)}>
                <Image
                  source={icons.up}
                  style={{
                    height: 10,
                    width: 10,
                    tintColor: COLORS.white,
                  }}
                />
                <Text
                  style={{
                    left: 3,
                    fontSize: 12,
                    fontWeight: '500',
                    color: COLORS.white,
                  }}>
                  Over
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.purple_50,
              padding: 10,
              marginTop: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={icons.user}
                  style={{
                    height: 12,
                    width: 12,
                    tintColor: COLORS.darkGray,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.darkGray,
                    left: 8,
                    fontWeight: '500',
                  }}>
                  355 Players
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={icons.chart}
                  style={{
                    height: 10,
                    width: 10,
                    tintColor: COLORS.darkGray,
                    right: 8,
                  }}
                />
                <Text
                  style={{
                    fontSize: 12,
                    color: COLORS.darkGray,
                    fontWeight: '500',
                  }}>
                  View Chart
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  marginTop: 10,
                  borderWidth: 5,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                  borderColor: '#ec4899',
                  width: '75%',
                }}></View>
              <View
                style={{
                  marginTop: 10,
                  borderWidth: 5,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                  borderColor: '#2dd4bf',
                  width: '25%',
                }}></View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.gray2,
                }}>
                232 predicted under
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.gray2,
                }}>
                123 predicted over
              </Text>
            </View>
          </View>
        </View>
      </View>
      {predictionModal()}
      <TouchableOpacity
        style={{marginTop: 20}}
        onPress={() => navigation.navigate('HomeTab')}>
        <Text style={{fontSize: 18}}> Screen 2 (Tabs)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
