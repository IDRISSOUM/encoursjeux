import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';

const DATA = [
  'first row',
  'second row',
  'third row',
  'fourth row',
  'fifth row',
  'sixth row',
  'seventh row',
  'Eight row',
  'Nine row',
  'Tenth row',
];

class Autre extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Autre!</Text>
      </View>
    );
  }
}
export default Autre;
