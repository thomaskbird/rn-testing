import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from '../components/typo/Header.tsx';


const HeaderView = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <Header text="Header View" variant="h1" />

      <View style={styles.item} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    zIndex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  item: {
    width: 200,
    height: 1200,
  },
});

export default HeaderView;
