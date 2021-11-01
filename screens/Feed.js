/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Accueil extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, backgroundColor: '#22427CFF'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <View style={{flex: 8, flexDirection: 'row'}}>
            <View style={{flex: 5.8, justifyContent: 'center'}} />
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              flex: 4,
              flexDirection: 'row',
              justifyContent: 'center',
              // backgroundColor: 'green',
            }}>
            <View style={{flex: 1, borderBottomColor: 10}}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 130,
                    height: 60,
                    backgroundColor: '#FFFFFF',
                  }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Actualité
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 130,
                    height: 60,
                    backgroundColor: '#FFFFFF',
                  }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      // backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Actualités
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{flex: 1}}>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 130,
                    height: 60,
                    backgroundColor: '#FFFFFF',
                  }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      // backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontFamily: 'Roboto',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Jeux
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  flexDirection: 'row-reverse',
                }}>
                <TouchableOpacity
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 130,
                    height: 60,
                    backgroundColor: '#FFFFFF',
                  }}
                  onPress={() => this.props.navigation.navigate()}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      // backgroundColor: '#FFFFFF',
                      color: '#000000',
                      fontSize: 23,
                      textAlign: 'center',
                    }}>
                    Actualités
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Accueil;
