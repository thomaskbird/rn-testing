import {Pressable, Text, TextStyle} from 'react-native';
import React from 'react';
import stylesheet from '../../styles/stylesheet.ts';
import {StyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';
import {ViewStyle} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import {PressableStateCallbackType} from 'react-native/Libraries/Components/Pressable/Pressable';

export type ButtonType = {
  text: string;
  onNavigate(): void;
  customStyles?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
  customTextStyles?:
    | StyleProp<TextStyle>
    | ((state: PressableStateCallbackType) => StyleProp<TextStyle>);
};

const CustomizableButton = ({
  text,
  onNavigate,
  customStyles,
  customTextStyles,
}: ButtonType) => {
  return (
    <Pressable
      style={() => [stylesheet.button, customStyles]}
      onPress={() => onNavigate()}>
      <Text style={() => [stylesheet.buttonText, customTextStyles]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default CustomizableButton;
