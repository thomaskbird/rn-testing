import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export type HeaderType = {
  isOverlapVisible?: boolean;
};

const Header = ({isOverlapVisible = true}: HeaderType) => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.headerRow, styles.topRow]}>
        <View>
          <Image
            source={require('../../assets/images/menu.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.columnMax}>
          <Text style={styles.logo}>Logo</Text>
        </View>
        <View>
          <Image
            source={require('../../assets/images/cl.jpg')}
            style={styles.avatar}
          />
        </View>
        <View style={styles.roundedBottom} />
      </View>
      {isOverlapVisible && (
        <View style={styles.overlap}>
          <View style={styles.overlapChild} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 0,
    paddingBottom: 0,
    backgroundColor: '#247ec7',
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  columnMax: {
    flex: 1,
  },
  topRow: {
    paddingTop: 0,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  logo: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 24,
    color: '#fff',
    textTransform: 'uppercase',
    marginTop: 5,
    letterSpacing: 5,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  icon: {
    width: 25,
    height: 25,
  },
  overlap: {
    height: 30,
    backgroundColor: '#247ec7',
  },
  overlapChild: {
    height: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default Header;
