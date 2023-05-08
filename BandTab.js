import React from 'react';
import { View, FlatList, Text } from 'react-native';
import metalData from './metal.json';

const BandTab = () => {
  const BandItem = ({ band }) => {
    return (
      <View>
        <Text>Band Name: {band.band_name}</Text>
        <Text>Country of Origin: {band.origin}</Text>
        <Text>Number of Fans: {band.fans}</Text>
        <Text>Year Formed: {band.formed}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={metalData}
        keyExtractor={(item) => item.band_name}
        renderItem={({ item }) => <BandItem band={item} />}
      />
    </View>
  );
};

export default BandTab;