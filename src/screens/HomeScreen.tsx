import React, {useRef} from 'react';
import {Pressable, Text, View} from 'react-native';
import Button from '../components/Button/Button.tsx';
import Dropdown from '../components/Dropdown/Dropdown.tsx';
import Calendar from '../components/Calendar/Calendar.tsx';
import {CalendarApi} from "../components/Calendar/Calendar.types.ts";

const HomeScreen = ({navigation}) => {
  const calendarApi = useRef<null | CalendarApi>(null);

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

      <Pressable onPress={() => console.log('vals', calendarApi.current?.getValues())}><Text>Get vals</Text></Pressable>

      <Calendar
        onReady={api => {
          calendarApi.current = api;
        }}
      />
    </View>
  );
};

export default HomeScreen;
