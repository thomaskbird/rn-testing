import {StyleSheet} from 'react-native';
import stylesBase from './stylesBase.ts';

const stylesheet = StyleSheet.create({
  button: {
    ...stylesBase.button,
    width: '80%',
    marginHorizontal: '10%',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default stylesheet;
