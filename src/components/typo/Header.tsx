import { Text } from "react-native";
import stylesTypo from '../../styles/stylesTypo.ts';

type HeaderType = {
  text: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
};

const getStyles = (variant: HeaderType['variant']) => {
  let style = {};

  switch (variant) {
    case 'h1':
      style = stylesTypo.h1;
      break;
    case 'h2':
      style = stylesTypo.h2;
      break;
    case 'h3':
      style = stylesTypo.h3;
      break;
  }

  return style;
};

const Header = ({ text, variant }: HeaderType) => {
  const style = getStyles(variant);

  return (
    <Text style={style}>
      {text}
    </Text>
  );
};

export default Header;
