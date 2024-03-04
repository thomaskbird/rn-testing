import { StyleSheet, Text, View } from "react-native";
import { getHeaderTitle } from '@react-navigation/elements';
import Button from '../Button/Button.tsx';

type CustomHeaderType = {
  navigation: any;
  route: any;
  options: any;
  back: any;
};

const CustomHeader = ({navigation, route, options, back}: CustomHeaderType) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <View style={styles.headerWrapper}>
      {back && <Button text="Back" onNavigate={navigation.goBack} />}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingTop: 20,
    display: 'flex',
    backgroundColor: '#111',
  },
  title: {
    color: '#fff',
  },
});

export default CustomHeader;
