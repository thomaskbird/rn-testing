import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../components/Button/Button.tsx';
import CustomizableButton from '../components/CustomizableButton/CustomizableButton.tsx';

const styles = StyleSheet.create({
  top: {
    height: 150,
    backgroundColor: '#082348',
  },
  scrollContainer: {
    marginTop: -85,
  },
  horizontalText: {
    fontSize: 28,
    color: '#fff',
    marginHorizontal: 30,
    fontWeight: 'bold',
  },
  bottom: {
    height: 500,
    backgroundColor: '#eee',
  },
  card: {
    height: 150,
    borderWidth: 1,
    top: -40,
    display: 'flex',
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 20,
    flexDirection: 'row',
    borderStyle: 'solid',
    position: 'relative',
    borderColor: '#5a9b98',
    backgroundColor: '#25716e',
  },
  cardText: {
    flex: 1,
    padding: 20,
  },
  cardTextTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardTextSubtitle: {
    color: '#fff',
  },
  cardTextButton: {},
  customButtonTextStyles: {
    fontSize: 1,
    color: '#fff',
  },
  cardImage: {},
  image: {
    right: 0,
    bottom: 0,
    width: 130,
    height: 125,
    position: 'absolute',
  },
});

const TwoSectionWithOverlapCard = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.top}></View>
      <View style={styles.bottom}>
        <ScrollView horizontal={true} style={styles.scrollContainer}>
          <Text style={styles.horizontalText}>All</Text>
          <Text style={styles.horizontalText}>Favorites</Text>
          <Text style={styles.horizontalText}>Recent</Text>
          <Text style={styles.horizontalText}>Near by</Text>
          <Text style={styles.horizontalText}>Popular</Text>
          <Text style={styles.horizontalText}>Price</Text>
        </ScrollView>
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.cardTextTitle}>Invite your friends!</Text>
            <Text style={styles.cardTextSubtitle}>
              Get $20 for a limited time only
            </Text>
            <CustomizableButton
              text="Invite"
              onNavigate={() => console.log('press')}
              customStyles={{
                width: 100,
                marginTop: 20,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: '#e55527',
              }}
              customTextStyles={styles.customButtonTextStyles}
            />
          </View>
          <View style={styles.cardImage}>
            <Image
              source={require('../assets/images/gift.png')}
              style={styles.image}
            />
          </View>
        </View>
        <View style={{height: 300}}></View>
        <Button text="Home" onNavigate={() => navigation.navigate('Home')} />
      </View>
    </ScrollView>
  );
};

export default TwoSectionWithOverlapCard;
