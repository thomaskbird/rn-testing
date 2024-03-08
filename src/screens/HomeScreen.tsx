import React from 'react';
import {Text, View} from 'react-native';
import Button from '../components/Button/Button.tsx';
import Dropdown from '../components/Dropdown/Dropdown.tsx';
import Calendar from '../components/Calendar/Calendar.tsx';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{height: '100%', backgroundColor: '#333'}}>
      <Text>Home</Text>

      <Dropdown />

      <Button
        text="Dashboard"
        onNavigate={() => navigation.navigate('Dashboard')}
      />

      <Button
        text="TwoScreenWithOverlapCard"
        onNavigate={() => navigation.navigate('TwoScreenWithOverlapCard')}
      />

      <Button text="Header" onNavigate={() => navigation.navigate('Header')} />

      <Calendar />
    </View>
  );
};

export default HomeScreen;
