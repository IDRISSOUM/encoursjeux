/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const DATA = [
  {
    id: 'id-1',
    title: 'A propos de CartoTchad',
  },
  {
    id: 'id-2',
    title: 'Nos réalisations',
  },
  {
    id: 'id-3',
    title: 'Voir notre site web',
  },
  {
    id: 'id-4',
    title: 'Partager',
  },
  {
    id: 'id-5',
    title: 'Evaluer',
  },
  {
    id: 'id-6',
    title: 'Version : 1.0.0.0',
  },
];

const Item = ({title}) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#737373',
      }}>
      <Text style={{fontSize: 20}}>{title}</Text>
    </View>
  );
};

const renderItem = ({item}) => <Item title={item.title} />;
class Autre extends Component {
  render() {
    return (
      <View style={{flex: 1, marginTop: 10, padding: 0}}>
        <FlatList
          data={DATA}
          // eslint-disable-next-line no-undef
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
export default Autre;
