import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button/Button.tsx';
import Dropdown from '../components/Dropdown/Dropdown.tsx';


const DashboardScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard</Text>

      <Button text="Home" onNavigate={() => navigation.navigate('Home')} />
    </View>
  );
};

export default DashboardScreen;
