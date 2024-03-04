/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen.tsx';
import DashboardScreen from './src/screens/DashboardScreen.tsx';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import CustomHeader from './src/components/CustomHeader/CustomHeader.tsx';
import HeaderView from './src/screens/HeaderView.tsx';
import Header from './src/components/Header/Header.tsx';
import TwoSectionWithOverlapCard from './src/screens/TwoSectionWithOverlapCard.tsx';

const MainPages = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <MainPages.Navigator>
        <MainPages.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <MainPages.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: 'Dashboard',
            header: props => <CustomHeader {...props} />,
          }}
        />
        <MainPages.Screen
          name="TwoScreenWithOverlapCard"
          component={TwoSectionWithOverlapCard}
          options={{
            title: 'TwoSectionWithOverlapCard',
          }}
        />
        <MainPages.Screen
          name="Header"
          component={HeaderView}
          options={{
            title: 'Header View',
            header: props => <Header {...props} />,
          }}
        />
      </MainPages.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
