import { Button, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <View style={stylesheet.container}>
      <Button
        title={`${!isOpen ? 'Open' : 'Close'} View trackers`}
        onPress={() => setIsOpen(prevState => !prevState)}
      />
      {isOpen && (
        <FlatList
          style={stylesheet.listContainer}
          data={[
            { key: 'Smoking' },
            { key: 'Trim Pennys paws'},
            { key: 'Kids visitation' },
            { key: 'Workout' },
            { key: 'Oil change - BMW' },
            { key: 'Oil change - KIA' },
          ]}
          renderItem={({ item }) => (
            <Text style={stylesheet.listItem}>{item.key}</Text>
          )}
        />
      )}
    </View>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  listContainer: {
    backgroundColor: '#f5f5f5',
  },
  listItem: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Dropdown;
